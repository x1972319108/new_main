<template>
    <div>
        <div class="back_btn"><input type="button" value="返回" @click="get_back"></div>
        <h4>this is third page</h4>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        get_back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>