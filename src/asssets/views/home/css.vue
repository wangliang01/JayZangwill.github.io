<template>
	<div>
		<div class="container">
			<article>
				<ol class="breadcrumb">
					<li>
						<router-link to="/">首页</router-link>
					</li>
					<li class="active">学习css3(1)</li>
				</ol>
				<h1 class="text-center">学习css3(1)</h1>
				<p>最近研究了一下css如何实现图片轮播效果，研究了好多天终于弄出来了,效果看
					<a href="http://jayzangwill.github.io/baidu-task/task-12/task-12.html">这里</a>
				</p>
				<p>目前还不能实现自动换页效果，这效果以后有时间再加上吧。。。。但是目前能实现点击下面页码实现换页的效果，话不多说，先上代码(标签部分就右键查看源代码了)</p>
				<pre>
.banner
{
    position: relative;
    width: 400px;
    height: 200px;
    overflow: hidden;
    margin: auto;
}
   </pre>
				<p>以上这段代码是对呈现在用户面前的这个区块进行初始化，没什么好说的</p>
				<pre>
.img
{
    width: 300%;
    height: 100%;
    position: relative;
    left: 0px;
    transition: 0.5s left;
    -webkit-transition: 0.5s left ;
    -moz-transition: 0.5s left ;
    -o-transition: 0.5s left;

}
   </pre>
				<p>以上这段代码是对包裹图片的框进行初始化让它的宽度等于父元素（也就是.banner）3倍，以装下3张图片（装入多少张图片就将这个盒子放大多少倍）</p>
				<pre>
.img li
{
    display: inline-block;
    float: left;
    width: 400px;
}
.img li:nth-child(2)
{

    background-color:lawngreen;
    height: 200px;
}
.img li:nth-child(3)
{
    background-color: aqua;
    height: 200px;
}
.img li:nth-child(1)
{
    height: 200px;
    background-color: red;
}
   </pre>
				<p>以上这段代码是让图片以列显示，并将宽度设为展示框(.banner)的宽度，并为每一个元素设置背景色（如果有图片就不用设置了，我这里是为了方便不插入图片了）</p>
				<pre>
.count
{
    position: absolute;
   bottom: 0px;
    right: 0px;
}
li
{
    text-decoration: none;
}
.count a
{
    padding: 10px;
    background: #fff;
    opacity: .8;
    border-radius: 50%;
}
   </pre>
				<p>上面这段代码是设置下面的按钮的，基本没什么好说的</p>
				<pre>
#img1:target~.img{
    left: 0;
}
#img2:target~.img{
    left: -100%;
}
#img3:target~.img{
    left: -200%;
}
</pre>
				<p>上面这段代码就是困惑我这么多天的代码，最终还是给我弄出来了.target是突出显示活动的锚的（也就是#）在这里target伪类是配合a标签的href属性用的，我的a标签的href属性的锚都是指向对应的id属性，至于我为什么要多加多余的标签span，为何不把id直接给下面的li呢？这也是困惑我很久的原因。</p>
				<p>那就是因为如果我们给li加id css的选择器只能往下选不能往上选所以不得不在图片列表的上面加span来控制下面的图片列表。</p>
				<p>也许有人会问，为什么不直接单个控制li？这个方法我也想过。如果图片展示框(.banner)没有设置overflow:hidden的话是可以行得通的，但是如果不设置这个的话，旁边的图片就会显示出来，打不到我们预想的效果，但是加了以后就不行了，点了按钮之后图片就会乱飞，至于原因嘛...我还在了解中...</p>
				<br>
				<p>俗话说得好，好的css效果ie都不支持（ie10+以上可以支持），因为这是css3，ie老版本的浏览器没法兼容，看不到效果的骚年们就换用高级一点的浏览器吧，打完收工！</p>
			</article>
		</div>
		<go-top></go-top>
	</div>
</template>
<style scoped>
	p {
		font-size: 20px;
	}
</style>
<script>
import goTop from 'components/Home/goTop';
	export default {
		name: 'css1',
		components:{
			goTop
		},
		created: function() {
			window.scrollTo(0, 0);
		}
	}
</script>