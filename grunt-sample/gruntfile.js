/*
  1、Grunt 的入口文件
  2、用于定义一些需要Grunt自动执行的任务
  3、需要导出一个函数
  4、此函数接收一个grunt形参，内部提供一些创建任务时可以用到的API
*/

module.exports = grunt => {
  grunt.initConfig({
    /* foo: {
      bar: 'hello foo.bar'
    } */
    foo: 'hello foo.bar',
    build: {
      options: {
        foo: 'bar'
      },
      js: {
        options: {
          foo: 'jsbar'
        }
      },
      css: '2',
    }
  })

  // 多目标模式，可以让任务根据配置形成多个子任务
  grunt.registerMultiTask('build', function () {
    console.log(this.options())
    console.log(`target: ${this.target}，data: ${this.data}`)
  })

  grunt.registerTask('foo', () => {
    console.log('hello grunt!')
    console.log(grunt.config('foo'))
  })

  grunt.registerTask('bar', '任务描述', () => {
    console.log('other Task')
  })

  grunt.registerTask('bad', () => {
    console.log('bad work')
    return false
  })

  grunt.registerTask('async-task', function () {
    const done = this.async()
    setTimeout(() => {
      console.log('async-task working')
      done()
    }, 1000);
  })

  grunt.registerTask('default', ['foo', 'bad','bar'])

  grunt.registerTask('bad-async-task', function () {
    const done = this.async()
    setTimeout(() => {
      console.log('async-task working')
      done(false)
    }, 1000);
  })
}