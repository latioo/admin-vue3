<template>
  <div class="page">
    <div class="top">
      <div class="header">
        <img :src="logo" class="logo" title="logo" />
        <div class="title">Whatever Name</div>
      </div>
      <div class="desc">whatever desc</div>
    </div>
    <div class="main">
      <a-form
        :model="formState"
        name="normal_login"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          placeholder="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input placeholder="Username" v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password
            placeholder="Password"
            autocomplete="off"
            v-model:value="formState.password"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <div class="login-form-wrap">
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember"
              >Remember me</a-checkbox
            >
          </a-form-item>
          <a class="login-form-forgot" href="">Forgot password</a>
        </div>
        <a-form-item>
          <a-button
            type="primary"
            size="large"
            html-type="submit"
            class="login-form-button"
            :loading="loading"
          >
            Log in
          </a-button>
          Or
          <a href="">register now!</a>
        </a-form-item>
      </a-form>
    </div>
    <div class="foot">Copyright xxx 技术支持: xxxx</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import logo from '../../assets/login/logo.svg'
import { useRoute, useRouter } from 'vue-router'
const formState = ref({
  username: 'admin',
  password: '123456',
  remember: true,
})

const loading = ref(false)

const router = useRouter()
const onFinish = (values) => {
  console.log('Success:', values)
  loading.value = true
  setTimeout(() => {
    router.push('/')
  }, 500)
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
</script>
<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 110px 0 144px;
  background-image: url(../../assets/login/background.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  .top {
    text-align: center;
    padding: 12px 0;
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      .logo {
        height: 44px;
        margin-right: 16px;
        vertical-align: top;
        border-style: none;
      }
      .title {
        position: relative;
        top: 2px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 33px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      }
    }
    .desc {
      padding: 12px 0;
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    }
  }
  .main {
    width: 368px;
    min-width: 260px;
    margin: 0 auto;
  }
  .foot {
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 48px 0 24px;
    padding: 0 16px;
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }

  .login-form-button {
    width: 100%;
    margin: 24px 0;
  }
}
</style>
