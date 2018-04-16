<template>
    <div style="width: 250px;margin: 100px;">
        <Input v-model="value5" type="text" placeholder="邮箱" icon="ios-search"></Input>
        <Input v-model="value6" type="text"  placeholder="Enter something..." clearable></Input>

        <h2>test input field</h2>
        <div class="input-field">
            <InputField icon="icon-icon-email" rightIcon= "ios-search" :type="type" v-model="value1">
                <span slot="prepend"></span>
            </InputField>
            <div @click="handle" class="eye-icon">
                <Icon class="icon-icon-password-on" :class= "{'hide-opcity' : type == 'password'}"></Icon>
            </div>
        </div>

        <h3> re password</h3>
        <InputField icon="icon-icon-email" rightIcon= "icon-icon-password-on" :type="type" v-model="value2">
            <span slot="prepend"></span>
        </InputField>

        <h3>email</h3>
        <InputField icon="ios-search" rightIcon= "ios-search" type="email">
            <span slot="prepend"></span>
        </InputField>


    </div>
</template>
<script>
    export default {
        data () {
            return {
                value5: '',
                value6: 'sdf',
                value1:'',
                value2:'',
                type:'password'
            }
        },
        methods:{
            handle() {
                if(this.type == 'text'){
                    this.type = 'password'
                }
                else {
                    this.type = 'text'
                }
            }
        }
    }

</script>
<style lang="less">
    .input-field {
        position:relative
    }
    .eye-icon {
        position: absolute;
        top: 2px;
        right: 0;
        line-height: 44px;
        height: 44px;
        text-align: center;
        z-index: 2;
        width: 40px;
        font-size: 14px;
        color: #93A2BB;
    }
    .hide-opcity {
        opacity: .3;
    }
</style>
