<template>
  <div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="第1集" name="1">
        <el-card style="margin-left:-15px; border:none; margin-bottom:-30px;">
          <div>
            <el-container style="height:50px;width:200px;">
              <el-aside style="font-size:30px;width:40px;">
                <i class='el-icon-s-comment'></i>
              </el-aside>
              <el-main style="padding: 0;">
                <el-container>
                  <el-header style="font-size:15px;height:25px;">
                    评分
                  </el-header>
                  <el-main style="padding:0;margin-left:15px;">
                    <el-rate
                      v-model="value"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}">
                    </el-rate>
                  </el-main>
                </el-container>
              </el-main>
            </el-container>
            <el-container style="height:50px;width:200px;margin-top:10px;">
              <el-aside style="font-size:30px;width:40px;">
                <i class='el-icon-video-camera-solid'></i>
              </el-aside>
              <el-main style="padding: 0;">
                <el-container>
                  <el-header style="font-size:15px;height:25px;">
                    导演
                  </el-header>
                  <el-main style="padding:0;margin-left:15px;">
                    Dave Filoni
                  </el-main>
                </el-container>
              </el-main>
            </el-container>
            <el-container style="height:50px;width:200px;margin-top:10px;">
              <el-aside style="font-size:30px;width:40px;">
                <i class='el-icon-date'></i>
              </el-aside>
              <el-main style="padding: 0;">
                <el-container>
                  <el-header style="font-size:15px;height:25px;">
                    发行日期
                  </el-header>
                  <el-main style="padding:0;margin-left:15px;">
                    2019-11-12
                  </el-main>
                </el-container>
              </el-main>
            </el-container>
          </div>
        </el-card>
      </el-collapse-item>
      <el-collapse-item title="第2集" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="第3集" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="第4集" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

export default {
  name: 'BSeasonMeta',
  data () {
    return {
      activeName: '1',
      value: 3.7
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .box-card {
    width: 480px;
  }
</style>
