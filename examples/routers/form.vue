<template>
    <div>
        <Tabs type="card">
            <div style="width:290px">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
                    <Form-item prop="mail">
                        <InputField icon="ios-search" rightIcon="ios-search" type="email" placeholder="请输入邮箱"
                                    v-model="formValidate.mail">
                            <span slot="prepend"></span>
                        </InputField>
                    </Form-item>
                    <Form-item prop="password">
                        <InputField icon="ios-search" rightIcon="ios-search" :type="type" placeholder="请输入密码"
                                    v-model="formValidate.password">
                            <span slot="prepend"></span>
                        </InputField>
                        <div @click="handle" class="eye-icon">
                            <Icon class="ivu-icon-ios-search" :class="{'hide-opcity' : type == 'password'}"></Icon>
                        </div>
                    </Form-item>
                    <Form-item prop="test">
                        <InputField icon="ios-search" rightIcon="ios-search" :type="type" placeholder="请输入密码"
                                    v-model="formValidate.test">
                            <span slot="prepend"></span>
                        </InputField>
                    </Form-item>


                    <Form-item>
                        <Button type="primary-arrow" icon="ios-search" iconPosition="right"
                                @click="handleSubmit('formValidate')" :loading=loading>
                            立即登录
                        </Button>
                    </Form-item>
                </Form>
            </div>
        </Tabs>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                loading : false,
                formValidate: {
                    mail: '',
                    password:'',
                    test:''
                },
                ruleValidate: {
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'change' },
                        { required: true, message: '邮箱不能为空', trigger: 'blur' }
                    ],
                    password: [
                        {required: true, message:'请输入密码', trigger: 'blur'},
                        {required: true, message:'请输入密码', trigger: 'change'},
                    ],
                    test: [
                        {pattern:'(?![0-9]*$)(?![a-z A-Z]*$)[a-z A-Z 0-9]{6,}',message:'请输入超过6位的由字母和数字组合的密码', trigger:'blur'},
                        {pattern:'(?![0-9]*$)(?![a-z A-Z]*$)[a-z A-Z 0-9]{6,}',message:'请输入超过6位的由字母和数字组合的密码', trigger:'change'},

                    ]
                },
                 type:'password'
            }
        },
        methods: {
            handleSubmit (name) {
                this.loading = true;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');

                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                    this.loading = false;
                })
            },
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
        position: relative;
        margin-bottom: 18px;
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
