<template>
    <div class="captcha" >
        <div id="ActiveCaptcha"></div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        name:'Captcha',
        data() {
            return {
                isReady: false,
                captchaObj:{},
                currentStatus : this.reSent,
                isDestroy :false
            }
        },
        props: {
            width:{
                default:"290px"
            },
            captchaDestory:{
                type: Boolean,
                default: false
            }
        },
        computed: {
           
        },
        methods: {
             handlerEmbed(captchaObj) {
                let that = this;
                if (this.isDestroy) {
                     return;
                }
                captchaObj.appendTo('#ActiveCaptcha');
                captchaObj.onReady(function () {
                    that.isReady = true;
                    that.$emit('test', captchaObj)
                })
                let ele = this;
                captchaObj.onSuccess(function () {
                     ele.captchaPass = captchaObj.getValidate();
                     ele.currentStatus = false;
                     ele.$emit('reSentEvent',ele.captchaPass,ele.currentStatus)
                });
                },
                InitGeetestCap(){
                    var that = this;

                    const captcha = () => axios({
                    url: `//192.168.1.11:10001/api/init_captcha?time= ${new Date().getTime()}`,
                        method: 'get',
                    });
                    captcha().then(
                        function (res) {
                        var data = res.data;
                        if (that.isDestroy) {
                        return;
                        }
                        initGeetest({
                            gt: data.data.gt,
                            challenge: data.data.challenge,
                            new_captcha: data.data.new_captcha,
                            product: "embed",
                            offline: !data.data.success,
                            width:that.width,
                            protocol: 'https://',
                            lang: that.lang
                        }, function (captchaObj) {
                            that.captchaObj = captchaObj
                            that.handlerEmbed(captchaObj);
                            });
                        }
                    )
                }
        },
        mounted() {
            this.InitGeetestCap()  
        },
        watch:{
            reSent(val) {
                if(val){
                    this.captchaObj &&  this.captchaObj.reset()
                }
            }
            
        },
        components: {},
        destroyed () {
            this.isDestroy = true
        }
    }


</script>

<style scoped lang=less rel="stylesheet/less">
    .loading {
        width: 290px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f4f4f4;
        div {
            width: 10px;
            height: 10px;
            background-color: #347EFF;
            border-radius: 50%;
            display: inline-block;
            animation: bounceDelay 1s infinite ease-in-out;
            /* Prevent first frame from flickering when animation starts */
            animation-fill-mode: both;
            margin-left: 4px;
            &.bounce1 {
                animation-delay: -0.32s;
            }
            &.bounce2 {
                animation-delay: -0.16s;
            }
        }
        @keyframes bounceDelay {
            0%, 80%, 100% {
                transform: scale(0);
            }
            40% {
                transform: scale(1.0);
            }
        }
    }
</style>

