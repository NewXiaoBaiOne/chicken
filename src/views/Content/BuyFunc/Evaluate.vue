<template>
    <div id="cContentbox-evaluate">
        Evaluate
        <evaluatecontent></evaluatecontent>
        <!-- <el-rate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}">
        </el-rate> -->
    </div>
</template>
<script>
import evaluatecontent from './Evaluate/Evaluatecontent'
export default {
    data(){
        return{
            value:4.2
        }
    },
    components:{
        evaluatecontent
    }
}
</script>
<style lang="less" scoped>
#cContentbox-evaluate{
    
}

</style>