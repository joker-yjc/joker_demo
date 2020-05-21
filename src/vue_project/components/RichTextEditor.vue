<template>
  <div id="editorCom">
    <textarea :id="id"></textarea>
  </div>
</template>
<script>
import tinymce from 'tinymce'
import 'tinymce/skins/ui/oxide/skin.min.css'
// import 'tinymce/skins/ui/oxide/content.min.css'
// import 'tinymce/skins/content/default/content.css'
import 'tinymce/themes/silver/theme'
import 'tinymce/plugins/image'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
// import 'tinymce/plugins/code'
// import 'tinymce/plugins/anchor'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/fullpage'
import 'tinymce/plugins/preview'
// import 'tinymce/plugins/autosave'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/link'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/paste'

export default {
  name: 'richEditor',
  methods: {
    initEditor() {
      tinymce.init(this.option)
    },
    // 获取内容
    getContent() {
      return tinymce.editors[this.id].getContent()
    },
    // 设置内容
    setContent(content){
      return tinymce.editors[this.id].setContent(content)
    },
    // 插入内容
    addHtml(val) {
      tinymce.editors[this.id]
        ? tinymce.editors[this.id].insertContent(val)
        : console.error('编辑器初始化失败')
    },
    // 覆盖填充富文本编辑器的内容Z
    changeContent(content) {
      tinymce.editors[this.id]
        ? tinymce.editors[this.id].setContent(content)
        : console.error('编辑器初始化失败')
    },
    destory() {
      tinymce.editors[this.id] && tinymce.editors[this.id].destroy()
    }
  },
  props: {
    // id
    id: {
      type: String,
      default: 'editor' + Date.now(),
    },
    plugins: {
      type: String,
      default:'paste hr fullpage charmap advlist autolink link image imagetools lists preview  media searchreplace table  autoresize',
    },
    toolbar: {
      type: Array,
      default: function () {
        return [
          'undo redo|forecolor backcolor bold italic underline strikethrough link fontsizeselect styleselect removeformat|indent outdent alignleft aligncenter alignright alignjustify|bullist numlist table',
          'preview image fullpage charmap media blockquote hr selectall searchreplace imagetools',
        ]
      },
    },
    imagesUploadUrl: {
      type: String
    },
     // 组件可以通过传递一个prop----handlerImageUpload方法来自定义上传图片
    handlerImageUpload:{
      // 接收三个参数 blobInfo, 类似用法如下
            // let formData = new FormData()
            // formData.append('file', blobInfo.blob(), blobInfo.filename())
        // success 成功时候的回调函数 需要传入文件上传后的地址
        // failure 文件失败后的回调函数 传入用于提示的信息
      type:Function
    },
    // 有插件默认配置项
    option: {
      type: Object,
      default: function () {
        let id = this.id,
          plugins = this.plugins,
          toolbar = this.toolbar,
          images_upload_url = this.imagesUploadUrl,
          handlerImageUpload= this.handlerImageUpload,
          placeholder=this.$attrs.placeholder
        return {
          // 选择配置器
          selector: '#' + id,
          // 插件配置
          plugins,
          // 汉化语言包(需要先下载资源)
          language: 'zh_CN',
          paste_data_images: true,
          paste_webkit_styles:'all',
          min_height: 600,
          relative_urls: false,
          language_url: 'https://oa-app-web.lianlianlvyou.com/js/tiny_locale_zh_CN.js',
          // '/static/langs/zh_CN.js',
          content_style:"img{max-width:100%}",
          content_css:['https://oa-app-web.lianlianlvyou.com/css/tiny_mce_content.min.css','https://oa-app-web.lianlianlvyou.com/css/tiny_mce_default_content.css'],
          toolbar,  
          // 允许自定义添加图片的样式
          image_advtab: true,
          // 上传图片的地址
          images_upload_url,
          images_upload_handler:handlerImageUpload?handlerImageUpload:null,
          // tinymce技术支持图标
          branding: false,
          placeholder: placeholder,
          // 图片标题
          image_caption: true,
          // 文件编码
          fullpage_default_encoding: 'UTF-8',
          // 可调节高度大小
          resize: false,
          // dom状态栏
          statusbar: false,
          // toolbar_sticky: true,
          setup: (editor) => {
            editor.on(
              'init', () => {
                // 抛出 'on-ready' 事件钩子
                this.$emit('on-ready','come from init')   
              }
            )
            // 抛出 'input' 事件钩子，同步value数据
            editor.on(
              'input change undo redo', (e) => {
                this.$emit('input', editor.getContent())
              }
            )
          }
        }
      },
    },
  },
  mounted() {
    this.initEditor()
  },
  beforeDestroy() {
    this.destory()
  }
 
}
</script>

<style lang="scss">
// @import 'edit';
</style>

