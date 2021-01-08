<template>
  <section :class="[tableClass]">
    <el-table
      :data="data"
      :ref="configs.ref"
      :class="$style['x-table']"
      :stripe="configs.isStripe"
      :row-key="configs.rowKey"
      :span-method="configs.spanMethod"
      :tree-props="configs.treeProps"
      :height="configs.height"
      :max-height="configs.maxHeight"
      :highlight-current-row="configs.highlightCurrentRow"
      :border="configs.border"
      @row-click="handleRowClick"
      @selection-change="handleSelectionChange"
      @current-change="handleCurrentChange"
      @sort-change="sortChange"
      v-loading="isLoading"
    >
      <div slot="empty" :class="$style['no-data']">
        <div><img src="../../assets/imgs/no-data.svg" /></div>
        <p>暂无数据</p>
      </div>
      <template v-if="configs.hasCheckbox">
        <!-- selectable属性表示是否禁用勾选 -->
        <el-table-column type="selection" :selectable="checkSelectable" width="55" />
      </template>

      <template v-if="configs.hasRadio">
        <el-table-column label="单选" width="55">
          <template slot-scope="{ $index, row }">
            <el-radio
              :label="$index"
              v-model="configs.radioValue"
              @change="radioChange({ index: $index, row })"
              style="margin-left: 10px;"
              >&nbsp;</el-radio
            >
          </template>
        </el-table-column>
      </template>
      <el-table-column v-if="configs.isOrdinal" type="index" width="50" label="序号">
        <template slot-scope="{ $index }">
          {{ String($index + 1).padStart(String(pageInfo.pageSize || 10).length, '0') }}
        </template>
      </el-table-column>
      <!-- 基于table外部的参数渲染表头：用于判断是哪一个表格的表头 -->
      <template v-if="configs.isRenderHeader">
        <el-table-column
          v-for="col of column"
          :key="col.key"
          :label="col.title"
          :prop="col.key"
          :render-header="(...arg) => configs.renderHeader(...arg, col)"
          :width="col.width"
          :align="col.align"
          :min-width="col['minWidth']"
          :show-overflow-tooltip="configs.isShowToolTip"
          :sortable="col.sortable"
        >
          <template slot-scope="{ row, $index }">
            <el-tooltip
              v-if="!col.key.includes('operations') && col.showTooltip"
              :class="$style['item']"
              effect="dark"
              placement="top"
              :disabled="col.disabled && col.disabled(row)"
            >
              <div slot="content" v-html="col.renderTooltip ? renderTooltip(row, col) : renderFormat(row, col)" />
              <template v-if="col.isClickable">
                <el-button
                  :class="col.isClickable ? $style['click-text'] : ''"
                  type="text"
                  @click="col.isClickable && handleCellClick(row, col.key)"
                  v-html="renderFormat(row, col)"
                />
              </template>
              <template v-else>
                <div :class="$style['overflow-text']" v-html="renderFormat(row, col)"></div>
              </template>
            </el-tooltip>
            <el-cascader
              v-if="col.isInline && col.columnType === 'cascader'"
              v-model="row[col.key]"
              :disabled="(col.isCascaderDisabled && col.isCascaderDisabled(row)) || false"
              :options="row.options"
              :props="
                row.props || {
                  expandTrigger: 'click',
                  value: 'value',
                  label: 'label',
                }
              "
              @change="
                cascaderChange({
                  column: col.key,
                  row,
                })
              "
              @visible-change="
                visibleChange({
                  column: col.key,
                  row,
                })
              "
            />
            <el-popover
              v-if="!col.key.includes('operations') && col.isPopover && col.isInline && col.columnType === 'input'"
              placement="right-end"
              :width="col.popoverWidth"
              :trigger="col.trigger || 'click'"
              :disabled="(col.isPopoverDisabled && col.isPopoverDisabled(row)) || false"
              @show="showPopoverEvent(col.key + row.id)"
              @hide="hidePopoverEvent(col.key + row.id)"
            >
              <div>
                <slot
                  :name="col.slotName"
                  v-bind:visible="showPopoverOfKey[col.key + row.id]"
                  v-bind:row="row"
                  v-bind:col="col"
                />
              </div>
              <el-input
                v-if="col.isInline && col.columnType === 'input'"
                v-model="row[col.key]"
                slot="reference"
                :disabled="(col.isInputDisabled && col.isInputDisabled(row)) || false"
                @change="
                  inputChange({
                    column: col.key,
                    row,
                  })
                "
                @clear="
                  inputClear({
                    row,
                    index: $index,
                  })
                "
                @focus="
                  inputFocus({
                    column: col.key,
                    row,
                    index: $index,
                  })
                "
              />
            </el-popover>
            <el-popover
              v-if="!col.key.includes('operations') && col.isPopover && col.columnType !== 'input'"
              placement="top"
              :width="col.width"
              :trigger="col.trigger || 'click'"
              :disabled="(col.isPopoverDisabled && col.isPopoverDisabled(row)) || false"
              @show="showPopoverEvent(col.key + row.id)"
              @hide="hidePopoverEvent(col.key + row.id)"
            >
              <div v-if="col.showPopoverSlot">
                <slot
                  :name="col.slotName"
                  v-bind:visible="showPopoverOfKey[col.key + row.id]"
                  v-bind:row="row"
                  v-bind:col="col"
                />
              </div>
              <div v-else v-html="renderFormat(row, col)"></div>
              <div slot="reference" v-html="renderPopover(row, col)" @click="clickPopover(row, col)"></div>
            </el-popover>
            <span
              v-if="
                !col.key.includes('operations') &&
                !col.showTooltip &&
                !col.isPopover &&
                col.isClickable &&
                col.isClickable(row)
              "
              :class="col.isClickable && col.isClickable(row) ? $style['click-text'] : $style['default-text']"
              @click="col.isClickable && col.isClickable(row) && handleCellClick(row, col.key)"
              v-html="renderFormat(row, col)"
            >
            </span>
            <el-checkbox
              v-if="col.isInline && col.columnType === 'checkbox'"
              v-model="row[col.key]"
              :disabled="(col.isCheckboxDisabled && col.isCheckboxDisabled(row)) || false"
              @change="
                checkboxChange({
                  column: col.key,
                  row,
                })
              "
            >
              是
            </el-checkbox>
            <template
              v-if="
                col.key !== 'operations' &&
                !col.showTooltip &&
                !(col.isClickable && col.isClickable(row)) &&
                !col.isPopover &&
                !(col.isInline && (col.columnType === 'cascader' || col.columnType === 'checkbox'))
              "
            >
              {{ renderFormat(row, col) }}
            </template>
            <template v-if="col.key === 'operations'">
              <template v-for="(btn, index) of col.buttons">
                <template v-if="btn.isPopover">
                  <span type="text" :key="btn.title">
                    <el-popover placement="bottom" width="160" :popper-class="btn.popoverClass">
                      <template v-for="b in btn.buttons">
                        <el-button
                          v-if="!b.isTooltip"
                          :key="b.title"
                          :disabled="!(b.isShow && b.isShow(row))"
                          size="mini"
                          type="text"
                          @click="handleBtnClick(row, b.key)"
                          >{{ b.title }}</el-button
                        >
                        <el-button
                          v-else
                          :key="b.title"
                          :disabled="!(b.isShow && b.isShow(row))"
                          size="mini"
                          type="text"
                          @click="handleBtnClick(row, b.key)"
                        >
                          {{ b.title }}
                          <el-tooltip class="item" effect="dark" :content="b.tooltipContent" placement="top">
                            <i class="el-icon-question"></i>
                          </el-tooltip>
                        </el-button>
                      </template>

                      <el-link
                        type="primary"
                        slot="reference"
                        @click="handleBtnClick(row, btn.key)"
                        :disabled="!(btn.isShow && btn.isShow(row))"
                        >{{ btn.title }}</el-link
                      >
                    </el-popover>
                  </span>
                </template>
                <template v-else>
                  <span type="text" :key="btn.title">
                    <el-link
                      type="primary"
                      :disabled="!(btn.isShow && btn.isShow(row))"
                      :class="col.isClickable && col.isClickable(row) ? $style['click-text'] : ''"
                      @click="handleBtnClick(row, btn.key)"
                      >{{ btn.title }}</el-link
                    >
                  </span>
                </template>
                <el-divider :key="btn.title" v-if="index + 1 !== col.buttons.length" direction="vertical" />
              </template>
            </template>
          </template>
        </el-table-column>
      </template>
      <!-- 默认的表头渲染，不需要传入外部参数 -->
      <template v-else>
        <el-table-column
          v-for="col of column"
          :key="col.key"
          :label="col.title"
          :prop="col.key"
          :render-header="configs.renderHeader"
          :width="col.width"
          :align="col.align"
          :min-width="col['minWidth']"
          :show-overflow-tooltip="configs.isShowToolTip"
          :sortable="col.sortable"
        >
          <template slot-scope="{ row, $index }">
            <el-tooltip
              v-if="!col.key.includes('operations') && col.showTooltip"
              :class="$style['item']"
              effect="dark"
              placement="top"
              :disabled="col.disabled && col.disabled(row)"
            >
              <div slot="content" v-html="col.renderTooltip ? renderTooltip(row, col) : renderFormat(row, col)" />
              <template v-if="col.isClickable">
                <el-button
                  :class="col.isClickable ? $style['click-text'] : ''"
                  type="text"
                  @click="col.isClickable && handleCellClick(row, col.key)"
                  v-html="renderFormat(row, col)"
                />
              </template>
              <template v-else>
                <div :class="$style['overflow-text']" v-html="renderFormat(row, col)"></div>
              </template>
            </el-tooltip>
            <el-cascader
              v-if="col.isInline && col.columnType === 'cascader'"
              v-model="row[col.key]"
              :disabled="(col.isCascaderDisabled && col.isCascaderDisabled(row)) || false"
              :options="row.options"
              :props="
                row.props || {
                  expandTrigger: 'click',
                  value: 'value',
                  label: 'label',
                }
              "
              @change="
                cascaderChange({
                  column: col.key,
                  row,
                })
              "
              @visible-change="
                visibleChange({
                  column: col.key,
                  row,
                })
              "
            />
            <el-popover
              v-if="!col.key.includes('operations') && col.isPopover && col.isInline && col.columnType === 'input'"
              placement="right-end"
              :width="col.popoverWidth"
              :trigger="col.trigger || 'click'"
              :disabled="(col.isPopoverDisabled && col.isPopoverDisabled(row)) || false"
              @show="showPopoverEvent(col.key + row.id)"
              @hide="hidePopoverEvent(col.key + row.id)"
            >
              <div>
                <slot
                  :name="col.slotName"
                  v-bind:visible="showPopoverOfKey[col.key + row.id]"
                  v-bind:row="row"
                  v-bind:col="col"
                />
              </div>
              <el-input
                v-if="col.isInline && col.columnType === 'input'"
                v-model="row[col.key]"
                slot="reference"
                :disabled="(col.isInputDisabled && col.isInputDisabled(row)) || false"
                @change="
                  inputChange({
                    column: col.key,
                    row,
                  })
                "
                @clear="
                  inputClear({
                    row,
                    index: $index,
                  })
                "
                @focus="
                  inputFocus({
                    column: col.key,
                    row,
                    index: $index,
                  })
                "
              />
            </el-popover>
            <el-popover
              v-if="!col.key.includes('operations') && col.isPopover && col.columnType !== 'input'"
              placement="top"
              :width="col.width"
              :trigger="col.trigger || 'click'"
              :disabled="(col.isPopoverDisabled && col.isPopoverDisabled(row)) || false"
              @show="showPopoverEvent(col.key + row.id)"
              @hide="hidePopoverEvent(col.key + row.id)"
            >
              <div v-if="col.showPopoverSlot">
                <slot
                  :name="col.slotName"
                  v-bind:visible="showPopoverOfKey[col.key + row.id]"
                  v-bind:row="row"
                  v-bind:col="col"
                />
              </div>
              <div v-else v-html="renderFormat(row, col)"></div>
              <div slot="reference" v-html="renderPopover(row, col)" @click="clickPopover(row, col)"></div>
            </el-popover>
            <span
              v-if="
                !col.key.includes('operations') &&
                !col.showTooltip &&
                !col.isPopover &&
                col.isClickable &&
                col.isClickable(row)
              "
              :class="col.isClickable && col.isClickable(row) ? $style['click-text'] : $style['default-text']"
              @click="col.isClickable && col.isClickable(row) && handleCellClick(row, col.key)"
              v-html="renderFormat(row, col)"
            >
            </span>
            <el-checkbox
              v-if="col.isInline && col.columnType === 'checkbox'"
              v-model="row[col.key]"
              :disabled="(col.isCheckboxDisabled && col.isCheckboxDisabled(row)) || false"
              @change="
                checkboxChange({
                  column: col.key,
                  row,
                })
              "
            >
              是
            </el-checkbox>
            <template
              v-if="
                col.key !== 'operations' &&
                !col.showTooltip &&
                !(col.isClickable && col.isClickable(row)) &&
                !col.isPopover &&
                !(col.isInline && (col.columnType === 'cascader' || col.columnType === 'checkbox'))
              "
            >
              {{ renderFormat(row, col) }}
            </template>
            <template v-if="col.key === 'operations'">
              <template v-for="(btn, index) of col.buttons">
                <template v-if="btn.isPopover">
                  <span type="text" :key="btn.title">
                    <el-popover placement="bottom" width="160" :popper-class="btn.popoverClass">
                      <template v-for="b in btn.buttons">
                        <el-button
                          v-if="!b.isTooltip"
                          :key="b.title"
                          :disabled="!(b.isShow && b.isShow(row))"
                          size="mini"
                          type="text"
                          @click="handleBtnClick(row, b.key)"
                          >{{ b.title }}</el-button
                        >
                        <el-button
                          v-else
                          :key="b.title"
                          :disabled="!(b.isShow && b.isShow(row))"
                          size="mini"
                          type="text"
                          @click="handleBtnClick(row, b.key)"
                        >
                          {{ b.title }}
                          <el-tooltip class="item" effect="dark" :content="b.tooltipContent" placement="top">
                            <i class="el-icon-question"></i>
                          </el-tooltip>
                        </el-button>
                      </template>

                      <el-link
                        type="primary"
                        slot="reference"
                        @click="handleBtnClick(row, btn.key)"
                        :disabled="!(btn.isShow && btn.isShow(row))"
                        >{{ btn.title }}</el-link
                      >
                    </el-popover>
                  </span>
                </template>
                <template v-else>
                  <span type="text" :key="btn.title">
                    <el-link
                      type="primary"
                      :disabled="!(btn.isShow && btn.isShow(row))"
                      :class="col.isClickable && col.isClickable(row) ? $style['click-text'] : ''"
                      @click="handleBtnClick(row, btn.key)"
                      >{{ btn.title }}</el-link
                    >
                  </span>
                </template>
                <el-divider :key="btn.title" v-if="index + 1 !== col.buttons.length" direction="vertical" />
              </template>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <XPagination v-if="data.length" :page-info="pageInfo" @handlePaginationChange="handleTableChange" />
  </section>
</template>

<script>
export default {
  name: 'XTable',

  props: {
    tableClass: {
      type: String,
      default: '',
    },
    data: {
      required: true,
      type: Array,
    },
    column: {
      required: true,
      type: Array,
    },
    configs: {
      type: Object,
      default: () => ({}),
    },
    pageInfo: {
      required: true,
      type: Object,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPopoverOfKey: {},
    }
  },
  methods: {
    showPopoverEvent(key) {
      this.$set(this.showPopoverOfKey, key, true)
    },
    hidePopoverEvent(key) {
      this.$set(this.showPopoverOfKey, key, false)
    },
    renderFormat(row, column) {
      if (column.render) {
        return column.render(row, column)
      }

      return row[column.key] || '--'
    },

    renderPopover(row, column) {
      if (column.renderPopover) {
        return column.renderPopover(row, column)
      }

      return row[column.key] || '--'
    },

    clickPopover(row, column) {
      this.$emit('clickPopover', { row, column })
    },

    renderTooltip(row, column) {
      if (column.render) {
        return column.renderTooltip(row, column)
      }

      return row[column.key] || '--'
    },

    handleCellClick(row, column) {
      this.$emit('cellClick', { row, column })
    },

    handleRowClick(row, column) {
      this.$emit('rowClick', { row, column })
    },

    handleBtnClick(row, column) {
      this.$emit('btnClick', { row, column })
    },

    handleTableChange(params) {
      this.$emit('change', params)
    },

    handleSelectionChange(selected) {
      this.$emit('selectionChange', selected)
    },

    cascaderChange(params) {
      this.$emit('cascaderChange', params)
    },
    inputChange(params) {
      this.$emit('inputChange', params)
    },

    visibleChange(params) {
      this.$emit('cascaderVisibleChange', params)
    },
    inputFocus(params) {
      this.$emit('inputFocus', params)
    },
    inputClear(params) {
      this.$emit('inputClear', params)
    },
    /**
     * @description 根据行数据的disabledCheckbox属性来控制是否禁用勾选
     */
    checkSelectable(row) {
      return !(row && row.disabledCheckbox)
    },
    checkboxChange(params) {
      this.$emit('checkboxChange', params)
    },
    radioChange({ index, row }) {
      this.$emit('radioChange', { index, row })
    },
    handleCurrentChange(params) {
      this.$emit('currentChange', params)
    },
    sortChange(params) {
      this.$emit('sortChange', params)
    },
  },
}
</script>

<style lang="scss" module>
@import './index.scss';
</style>
