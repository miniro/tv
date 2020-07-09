<template>
  <div>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :span="3">
        <AWorldButton/>
      </el-col>
      <el-col :span="10">
        <AWorldMap/>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="13" style="margin-top: 20px;">
        <ALineChart/>
      </el-col>
    </el-row>
  </div>
</template>>

<script>
import AWorldMap from '@/components/AWorldMap'
import AWorldButton from '@/components/AWorldButton'
import ALineChart from '@/components/ALineChart'

export default {
  name: 'AMain',
  components: {
    AWorldMap,
    AWorldButton,
    ALineChart
  }
}
</script>>
