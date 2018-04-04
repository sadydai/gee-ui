<template>
    <div>
        <Tabs type="card">
          <TabPane label="默认大小">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" >
                <Form-item label-for="autocomplete" prop="name">
                    <!--<span slot="label"><Icon type="ionic"></Icon></span>-->
                    <!--<AutoComplete element-id="autocomplete" v-model="formValidate.name" :data="['Li','Liang','Zhang']" placeholder="请输入姓名" icon="ios-search"></AutoComplete>-->
                </Form-item>
                <Form-item label-for="input" label="介绍" prop="desc">
                    <Input element-id="input" icon="ios-search" v-model="formValidate.desc" type="text" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                </Form-item>
                <Form-item label="邮箱" prop="mail">
                    <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
                </Form-item>
                <Form-item label-for="select"  label="城市" prop="city">
                    <Select element-id="select" filterable v-model="formValidate.city" placeholder="请选择所在地">
                        <Option value="beijing">北京市</Option>
                        <Option value="shanghai">上海市</Option>
                        <Option value="shenzhen">深圳市</Option>
                    </Select>
                </Form-item>
                <Form-item label-for="date" label="选择日期" prop="date">
                    <Date-picker element-id="date" type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                </Form-item>
                <Form-item label-for="cascader" label="级联选择" prop="cascader">
                    <Cascader elementId="cascader" :data="dataCascader" v-model="formValidate.cascader"></Cascader>
                </Form-item>

                <Form-item label-for="inputnumber" label="数字框" prop="inputnumber">
                    <InputNumber elementId="inputnumber" :max="10" :min="1" v-model="formValidate.inputnumber"></InputNumber>
                </Form-item>

                <Form-item label="选择日期">
                    <Row>
                        <Col span="11">
                        <Form-item prop="date">
                            <Date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
                        </Form-item>
                        </Col>
                        <Col span="2" style="text-align: center">-</Col>
                        <Col span="11">
                        <Form-item prop="time">
                            <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
                        </Form-item>
                        </Col>
                    </Row>
                </Form-item>
                <Form-item label="性别" prop="gender">
                    <Radio-group v-model="formValidate.gender">
                        <Radio label="male">男</Radio>
                        <Radio label="female">女</Radio>
                    </Radio-group>
                </Form-item>
                <Form-item label="爱好" prop="interest">
                    <Checkbox-group v-model="formValidate.interest">
                        <Checkbox label="吃饭"></Checkbox>
                        <Checkbox label="睡觉"></Checkbox>
                        <Checkbox label="跑步"></Checkbox>
                        <Checkbox label="看电影"></Checkbox>
                    </Checkbox-group>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formValidate')" icon="ios-cloud-upload-outline">提交</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px" icon="ios-reload">重置</Button>
                </Form-item>
            </Form>
          </TabPane>
        </Tabs>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                dataCascader: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                color: '#19be6b',
                valuer: 3,
                valuec: [],
                datac: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                value1: '',
                value11: 25,
                data1: [],
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: [],
                name: '',
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: '',
                    cascader: [],
                    inputnumber: 1
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'change' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'change' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            }
        }
    }
</script>


<!--<template>-->
    <!--<Form :model="formItem" :label-width="80">-->
        <!--<FormItem label="Input">-->
            <!--<Input v-model="formItem.input" placeholder="Enter something..."></Input>-->
        <!--</FormItem>-->
        <!--<FormItem label="Select">-->
            <!--<Select v-model="formItem.select">-->
                <!--<Option value="beijing">New York</Option>-->
                <!--<Option value="shanghai">London</Option>-->
                <!--<Option value="shenzhen">Sydney</Option>-->
            <!--</Select>-->
        <!--</FormItem>-->
        <!--<FormItem label="DatePicker">-->
            <!--<Row>-->
                <!--<Col span="11">-->
                <!--<DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>-->
                <!--</Col>-->
                <!--<Col span="2" style="text-align: center">-</Col>-->
                <!--<Col span="11">-->
                <!--<TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>-->
                <!--</Col>-->
            <!--</Row>-->
        <!--</FormItem>-->
        <!--<FormItem label="Radio">-->
            <!--<RadioGroup v-model="formItem.radio">-->
                <!--<Radio label="male">Male</Radio>-->
                <!--<Radio label="female">Female</Radio>-->
            <!--</RadioGroup>-->
        <!--</FormItem>-->
        <!--<FormItem label="Checkbox">-->
            <!--<CheckboxGroup v-model="formItem.checkbox">-->
                <!--<Checkbox label="Eat"></Checkbox>-->
                <!--<Checkbox label="Sleep"></Checkbox>-->
                <!--<Checkbox label="Run"></Checkbox>-->
                <!--<Checkbox label="Movie"></Checkbox>-->
            <!--</CheckboxGroup>-->
        <!--</FormItem>-->
        <!--<FormItem label="Switch">-->
            <!--<i-switch v-model="formItem.switch" size="large">-->
                <!--<span slot="open">On</span>-->
                <!--<span slot="close">Off</span>-->
            <!--</i-switch>-->
        <!--</FormItem>-->
        <!--<FormItem label="Slider">-->
            <!--<Slider v-model="formItem.slider" range></Slider>-->
        <!--</FormItem>-->
        <!--<FormItem label="Text">-->
            <!--<Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>-->
        <!--</FormItem>-->
        <!--<FormItem>-->
            <!--<Button type="primary">Submit</Button>-->
            <!--<Button type="ghost" style="margin-left: 8px">Cancel</Button>-->
        <!--</FormItem>-->
        <!--<br><br><br><br><br><br><br><br><br><br><br><br><br><br>-->
    <!--</Form>-->
<!--</template>-->
<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--formItem: {-->
                    <!--input: '',-->
                    <!--select: '',-->
                    <!--radio: 'male',-->
                    <!--checkbox: [],-->
                    <!--switch: true,-->
                    <!--date: '',-->
                    <!--time: '',-->
                    <!--slider: [20, 50],-->
                    <!--textarea: ''-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
