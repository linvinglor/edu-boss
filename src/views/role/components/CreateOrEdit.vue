<template>
    <div>
        <el-form label-width="80px" ref="roleform" :rules="rules" :model="role">
            <el-form-item label="角色名称" prop="name">
                <el-input v-model="role.name"></el-input>
            </el-form-item>
            <el-form-item label="角色编码" prop="code">
                <el-input v-model="role.code"></el-input>
            </el-form-item>
            <el-form-item label="角色描述" prop="description">
                <el-input type="textarea" v-model="role.description"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="$emit('cancel')">取消</el-button>
                <el-button type="primary" @click="onSubmit">确认</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createOrUpdate, getRoleById } from '@/services/role'
import { Form } from 'element-ui'

export default Vue.extend({
  name: 'CreateOrEditRole',
  props: {
    roleId: {
      type: [String, Number]
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      role: {
        code: '',
        name: '',
        description: ''
      },
      rules: {
        name: [{ required: true, message: '请输入名称', trigger: 'change' }],
        code: [{ required: true, message: '请输入编码', trigger: 'change' }],
        description: [{ required: true, message: '请输入描述', trigger: 'change' }]
      }
    }
  },

  created () {
    // 如果是编辑操作，则根据角色 ID 加载展示角色信息
    if (this.isEdit) {
      this.loadRole()
    }
  },

  methods: {
    async loadRole () {
      const { data } = await getRoleById(this.roleId)
      this.role = data.data
    },

    async onSubmit () {
      ;(this.$refs.roleform as Form).validate(async valid => {
        if (valid) {
          await createOrUpdate(this.role)
          this.$message.success('操作成功')
          this.$emit('success')
        }
      })
    }
  }
})
</script>

<style lang="scss" scoped></style>
