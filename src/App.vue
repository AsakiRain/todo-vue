<script>
import Header from './components/Header.vue';
import InputBar from './components/InputBar.vue';
import Section from './components/Section.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'app',
  components: { Header, InputBar, Section, Footer }
};
</script>

<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main id="main">
      <InputBar />
      <Section />
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<style>
body {
  min-width: 1280px;
}
.el-header {
  margin-bottom: 20px;
}
</style>
