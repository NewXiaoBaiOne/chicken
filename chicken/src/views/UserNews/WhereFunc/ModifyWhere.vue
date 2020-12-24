<template>
  <el-form
    :rules="rules"
    :model="addressForm"
    ref="addressForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="姓名" prop="name">
      <el-input
        type="text"
        v-model="addressForm.name"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input
        type="text"
        v-model="addressForm.phone"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="地址" prop="wherebig">
      <el-input
        type="text"
        v-model="addressForm.wherebig"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="详细地址" prop="wheresmall">
      <el-input
        type="text"
        v-model="addressForm.wheresmall"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <label>
        <input
          type="radio"
          name="usersex"
          value="男士"
          v-model="addressForm.usersex"
        />男士</label
      >
      <label
        ><input
          type="radio"
          name="usersex"
          value="女士"
          v-model="addressForm.usersex"
        />女士</label
      >
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm()">修改</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import bus from "@/bus";
export default {
  data() {
    const checkPhone = (rule, value, callback) => {
      const regPhone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (regPhone.test(value)) {
        return callback();
      }
      return callback(new Error("请输入正确的电话号码"));
    };
    const checkusersex = (rule, value, callback) => {
      if (value == "男士" || value == "女士") {
        return callback();
      }
      return callback(new Error("请输入正确的电话号码"));
    };
    const checklable = (rule, value, callback) => {
      if (value == "家" || value == "公司"|| value == "学校") {
        return callback();
      }
      return callback(new Error("请输入正确的电话号码"));
    };
    return {
      addressForm: {
        usersex: "",
        userid: 0,
        addressid: 0,
        name: "",
        phone: "",
        wherebig: "",
        wheresmall: "",
      },
      rules: {
        name: [
          { required: true, message: "姓名不能为空" },
          { max: 5, message: "姓名请短些" },
        ],
        phone: [
          { required: true, message: "号码不能为空" },
          { validator: checkPhone, trigger: "blur" },
        ],
        usersex: [
          { required: true, message: "性别不能为空" },
          { validator: checkusersex, trigger: "blur" },
        ],
        wherebig: [{ required: true, message: "地址不能为空" }],
        wheresmall: [{ required: true, message: "地址不能为空" }],
      },
    };
  },
  created() {
    this.addressForm.userid = localStorage.getItem("userID");
    this.addressForm.addressid = localStorage.getItem("modifyID");
    this.$axios
      .post("http://localhost:1234/user/address/one", {
        addressid: this.addressForm.addressid,
      })
      .then((res) => {
        console.log("this is modify 数据:usersex:", res.data[0].usersex);
        this.addressForm = res.data[0]
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {},
  methods: {
    submitForm() {
      if (this.rules) {
        let dataAd = {
            addressid: this.addressForm.addressid,
          userid: this.addressForm.userid,
          name: this.addressForm.name,
          phone: this.addressForm.phone,
          wherebig: this.addressForm.wherebig,
          wheresmall: this.addressForm.wheresmall,
          usersex: this.addressForm.usersex,
        };
        console.log("修改前数据:",dataAd)
        this.$axios
          .post("http://localhost:1234/user/modify", dataAd)
          .then((res) => {
            console.log(res.data);
            if (res.data.protocol41) {
              this.$router.push("/user/where");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("error submit!!");
        return false;
      }
    },
    resetForm() {
      this.addressForm = {
        usersex: "",
        userid: 0,
        name: "",
        phone: "",
        wherebig: "",
        wheresmall: "",
      };
    },
  },
};
</script>