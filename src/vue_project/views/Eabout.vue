
<script>
import About from './About.vue'
import testMixin from '@/vue_project/mixins/test.js'
export default {
  extends:About,
  mixins:[testMixin],
  data(){
   return { a:999}
  },
  methods:{
    getMethod(){
      console.log('子组件的重载方法')
    }
  },
  mounted(){
    console.log(123456)
    console.log(this.a)
    this.getMethod()
    console.log(this)
  }
}
</script>