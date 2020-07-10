<template>
  <div>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :span="5">
        <div class="test1">
          <BSeasonMeta/>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="test1"/>
      </el-col>
      <el-col :span="6">
        <div class="test1"/>
      </el-col>
    </el-row>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :span="4">
        <div class="test2"/>
      </el-col>
      <el-col :span="14">
        <div class="test2"/>
      </el-col>
      <el-col :span="6">
        <div class="test2"/>
      </el-col>
    </el-row>
    <el-row :gutter="24" type="flex" justify="center">
      <el-col :span="4">
        <div class="test3"/>
      </el-col>
      <el-col :span="4">
        <div class="test3"/>
      </el-col>
      <el-col :span="6">
        <div class="test3"/>
      </el-col>
      <el-col :span="10">
        <div class="test3"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BSeasonMeta from '@/components/BSeasonMeta'

export default {
  name: 'BMain',
  components: {
    BSeasonMeta
  },
  props: {
    tv_name: {
      type: String
    }
  }
}
</script>

<style>
  .test1 {
    border: 1px solid;
    height: 450px;
    margin-top: 20px;
    padding: 20px;
  }
  .test2 {
    border: 1px solid;
    height: 260px;
    margin-top: 20px;
  }
  .test3 {
    border: 1px solid;
    height: 160px;
    margin-top: 20px;
  }
</style>
