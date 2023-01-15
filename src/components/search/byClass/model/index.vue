<template>
  <div class="weanpons">
    <div class="top">
      <el-select
        v-model="type"
        placeholder="请选择年级"
        class="left-select"
        clearable
        filterable
      >
        <el-option
          v-for="item in optionsType"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary" @click="queryClick">查询</el-button>
    </div>
    <div class="middle">
      <div class="left">
        <el-table class="tablee" :data="tableData" border style="width: 100%">
          <el-table-column
            :width="item.width"
            v-for="item in tabTop"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
          >
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <el-button
                type="warning"
                size="mini"
                @click="rowDetail(scope.row)"
                >详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="rowCount"
          ></el-pagination>
        </div>
      </div>
    </div>
    <Detail v-if="showDetail" :row="rowData"></Detail>
  </div>
</template>
<script>
import Ajax from '@/api/byClass.js'
import {tableFiledByClass} from '@/utils/tableField/byClass.js'
import Detail from '@/components/search/byClass/model/detail.vue'

export default {
  name: 'byClass',
  components: {
    Detail
  },
  data() {
    return {
      // 选项参数
      optionsType: [
        {
          value: '一年级',
          label: '一年级'
        },
        {
          value: '二年级',
          label: '二年级'
        },
        {
          value: '三年级',
          label: '三年级'
        }
      ],
      type: '',
      tableData: [], //当前页数据
      tabTop: [],
      // 默认选中页数
      currentPage4: 1,
      allData: [],
      pageIndex: 0,
      rowCount: 0,
      showDetail: false, //默认不显示详情页面
      rowData: null
    }
  },
  watch: {},
  mounted() {
    this.initData()
  },
  beforeDestory() {},
  created() {},
  methods: {
    initData() {
      Ajax.getByClassJson(null).then((res) => {
        // console.log('res', res)
        if (res.code !== '200') {
          return
        }
        this.tableData.length = 0
        // this.tableData = res.data;
        this.tabTop = tableFiledByClass['分类1']
        // console.log('332',this.tabTop);
        this.rowCount = res.data.length
        this.allData = res.data
        let cnt = 10
        if (res.data.length < 10) {
          cnt = res.data.length
        }
        for (let i = 0; i < cnt; i++) {
          this.tableData.push(res.data[i])
        }
      })
    },
    queryClick() {
      if (this.type == '') {
        this.initData()
        return
      }
      // this.tableData.length = 0;
      this.tableData = []
      this.allData.length = 0
      Ajax.getByClassJson(null).then((res) => {
        if (res.code !== '200') {
          return
        }
        // this.tableData = res.data;
        this.tabTop = tableFiledByClass['分类1']
        for (let i = 0; i < res.data.length; i++) {
          if (this.type != '') {
            if (res.data[i].class == this.type) {
              this.allData.push(res.data[i])
            }
          }
        }
        this.rowCount = this.allData.length
        // this.allData = res.data;
        let cnt = 10
        if (this.allData.length < 10) {
          cnt = this.allData.length
        }
        for (let i = 0; i < cnt; i++) {
          this.tableData.push(this.allData[i])
        }
      })
    },
    handleSizeChange() {},
    handleCurrentChange(val) {
      this.tableData.length = 0
      let beginIndex = (val - 1) * 10
      let endIndex = beginIndex + 10
      if (val == parseInt(this.rowCount / 10) + 1) {
        endIndex = beginIndex + (this.rowCount % 10)
      }
      for (let i = beginIndex; i < endIndex; i++) {
        this.tableData.push(this.allData[i])
      }
    },
    rowDetail(row) {
      console.log('row-detail', row)
      this.showDetail = true
      this.rowData = row
    }
  }
}
</script>
<style scoped>
.weapons {
  height: 100%;
  width: 100%;
}

.weapons .top {
  height: 60px;
}

.weapons .middle {
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
}

.weapons .middle .left {
  width: 100%;
  height: 100%;
}

.weapons .middle .left .table {
  overflow: auto !important;
}

.weapons .middle .left .table /deep/.el-table--border {
  background-color: #052b4d00 !important;
  width: 100%;
}

.weapons .middle .left .pagination {
  position: absolute;
  left: 10px;
  bottom: 10px;
}

.weapons .middle .right {
  width: 40%;
  height: 100%;
}
</style>
