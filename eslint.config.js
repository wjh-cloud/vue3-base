import eslint from '@eslint/js'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import importSort from 'eslint-plugin-import'
import pluginVue from 'eslint-plugin-vue'

import autoImportGlobals from './.eslintrc-auto-import.json' with { type: 'json' }

export default [
  // 针对 .ts、.mts、.tsx 和 .vue 文件进行检查
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },
  // 忽略特定目录与自动生成的文件
  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/*.js',
      'src/types/auto-imports.d.ts',
      'src/types/components.d.ts',
    ]
  },
  // 注入自动导入产生的全局变量（ref、computed、ElMessage 等），避免 no-undef
  {
    name: 'app/auto-import-globals',
    languageOptions: {
      globals: {
        ...autoImportGlobals.globals,
      },
    },
  },
  // 合并默认配置
  eslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,

  {
    plugins: { importSort },
  },
  {
    rules: {
      // 基础代码风格规则
      'quotes': ['error', 'single'],  // 强制使用单引号
      'semi': ['error', 'never'],  // 强制不使用分号
      'no-unused-vars': ['warn'],  // 检查未使用的变量
      'sort-vars': 'error',  // 强制变量声明按字母顺序排列
      'no-console': ['warn', { allow: ['warn', 'error'] }],  // 禁止使用 console.log，允许 warn 和 error
      'linebreak-style': ['error', 'unix'],  // 强制使用 Unix 风格换行符
      'eqeqeq': ['error', 'always'],  // 强制使用全等运算符
      'function-call-argument-newline': ['error', 'consistent'],  // 强制函数调用时参数换行一致

      // Vue 特有的规则
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],  // 强制组件名称使用 PascalCase
      'vue/v-bind-style': ['error', 'shorthand'],  // 强制 v-bind 使用简写
      'vue/v-on-style': ['error', 'shorthand'],  // 强制 v-on 使用简写
      'vue/no-v-for-template-key': 'error',  // 禁止在模板中同时使用 v-if 和 v-for
      'vue/require-default-prop': 'warn',  // 强制 props 默认值与类型一致
      'vue/v-slot-style': ['error', 'shorthand'],  // 强制使用 v-slot 缩写
      'vue/html-quotes': ['error', 'double'],  // 强制模板属性使用双引号

      // TypeScript 特有的规则
      '@typescript-eslint/no-explicit-any': 'off',  // 允许使用 any 类型
      '@typescript-eslint/explicit-module-boundary-types': 'warn',  // 强制模块边界显式声明类型
      '@typescript-eslint/explicit-member-accessibility': 'warn',  // 强制类成员使用一致的访问修饰符
      '@typescript-eslint/no-unused-vars': 'warn',  // 禁止未使用的变量
      '@typescript-eslint/parameter-properties': 'off',  // 禁用参数属性语法
      // 'no-magic-numbers': ['error', { ignore: [0, 1, -1] }],  // 禁止魔法数字，允许一些常见数字
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],  // 限制空行数量

      // 禁用 Vue 中组件名称必须是多词的规则
      'vue/multi-word-component-names': 'off',

      // 强制导入按字母顺序排列
      'importSort/order': [
        'error',
        {
          'groups': [
            ['builtin', 'external'],  // 内置和外部模块排在前面
            ['internal'],  // 内部模块排在后面
            ['sibling', 'index'],  // 同级和根级模块
          ],
          'newlines-between': 'always',  // 每组导入之间要换行
          'alphabetize': {
            'order': 'asc',
            'caseInsensitive': true,
          },
        },
      ]
    }
  }
]
