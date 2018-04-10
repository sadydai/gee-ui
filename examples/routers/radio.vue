<template>
    <div>
        <!--<Radio size="large" v-model="single">Radio</Radio>-->
        <!--<Radio size="default" v-model="single">Radio</Radio>-->
        <!--<Radio size="small" v-model="single">Radio</Radio>-->

        <br><br>
        <Radio-group v-model="phone">
            <Radio label="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </Radio-group>
        <br>
        <br>
        <h2> 按钮式 Button style</h2>
        <br>
        <Radio-group v-model="button2" type="button" size="large">
            <Radio label="企业用户"></Radio>
            <Radio label="个人用户" ></Radio>
        </Radio-group>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                single: true,
                phone: '',
                button2: '北京',
            };
        },
        methods: {

        }
    };
</script>
