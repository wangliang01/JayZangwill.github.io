<template>
	<div>
		<ol class="breadcrumb">
			<li>
				<a ui-sref="home">首页</a>
			</li>
			<li class="active">学习css3(2)</li>
		</ol>
		<div class="container">
			<article>
				<h1 class="text-center">学习css3(2)</h1>
				<p>这次我们来研究研究css3的3d翻转，效果如下：</p>
				<div class="d3">
					<div class="bigCircular">
						<div class="smCircular1">
						</div>
						<div class="smCircular2">
							<a href="javascript:void(0)">我是链接</a>
						</div>
					</div>
				</div>
				<p>这个效果其实可以放在我欢迎页的那几个圆圈上作为导航用，感觉挺炫的，蛤蛤蛤。其实有一定css基础的来看这个的代码其实不难理解，老规矩，标签部分右键查看代码</p>
				<pre>
    .d3 {
    -wbkit- perspective: 800px;
    -moz- perspective: 800px;
    -o- perspective: 800px;
    perspective: 800px;
    -wbkit- perspective-origin: 50% 50%;
    -moz- perspective-origin: 50% 50%;
    -o- perspective-origin: 50% 50%;
    perspective-origin: 50% 50%;
    width: 300px;
    margin: auto;
}
       </pre>
				<p>上面这部分是对3d场景的设置，第一段代码是设置3d物体离屏幕的距离，第五段代码是设置看3d物体的角度，我这里设置为屏幕的正中央，如果有多个圆圈拍成一排的话为了观察效果可以调整这个观察的位置，最下面两段代码没什么好说的，就是让这个3d场景居中</p>
				<pre>
.bigCircular
{
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: #31B0D5;
	position: relative;
    margin: auto;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
}
       </pre>
				<p>上面这段代码是设置后面蓝色背景圆圈的一些属性，最下面那几段代码是让子元素的变换类型呈3d变换,position设置成relative是为了让子元素重叠</p>
				<pre>
.smCircular1,.smCircular2
{
	width: 180px;
	height: 180px;
	border-radius: 50%;
	position: absolute;
	left: 10px;
	top: 10px;
    cursor: pointer;
}
.smCircular2
{
    text-align: center;
    padding-top: 80px;
	background-color: #262626;
	z-index: -10;
}
.smCircular1
{
	background-color:#5CB85C;
	transition: transform 1s ease-in-out;
	-webkit-transition:-webkit- transform 1s ease-in-out;
	-o-transition:-o-transform 1s ease-in-out;
	-moz-transition:-moz-transform 1s ease-in-out;
    transform-origin: bottom;
    -webkit-transform-origin:bottom ;
    -o-transform-origin:bottom ;
    -moz-transform-origin:bottom ;
}
       </pre>
				<p>最上面那一撮代码没什么解释的，就是设置绿色的圆和黑色的圆的一些基本属性，最下面那一撮才是这段特效的重点。</p>
				<p>它设置了绿色圆的过渡类型和过渡时间还有过渡的速率，还有变换时以圆的底部为轴变换</p>
				<pre>
.bigCircular:hover .smCircular1
{
	transform: rotateX(-180deg);
	-webkit-transform: rotateX(-180deg);
	-o-transform: rotateX(-180deg);
	-moz-transform: rotateX(-180deg);
}
       </pre>
				<p>这段代码也是重点，它设置了当蓝色圆上有鼠标时，绿色圆向下翻180°，也就是沿着x轴翻，如果没有.bigCircular:hover这段的话直接把这段代码加在.smCircular1类上，当鼠标移上去一移动绿色圆就一直在那跳，达不到预期效果！</p>
				<p>到这里最上面的效果就已经可以实现了，学完以后可以拿去装X了，蛤蛤蛤！！</p>
			</article>
		</div>
		<go-top></go-top>
	</div>
</template>
<style scoped>
	p {
		font-size: 20px;
	}
	
	.d3 {
		-wbkit- perspective: 800px;
		-moz- perspective: 800px;
		-o- perspective: 800px;
		perspective: 800px;
		-wbkit- perspective-origin: 50% 50%;
		-moz- perspective-origin: 50% 50%;
		-o- perspective-origin: 50% 50%;
		perspective-origin: 50% 50%;
		width: 300px;
		margin: auto;
	}
	
	.bigCircular {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: #31B0D5;
		position: relative;
		margin: auto;
		transform-style: preserve-3d;
		-webkit-transform-style: preserve-3d;
		-o-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
	}
	
	.smCircular1,
	.smCircular2 {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		position: absolute;
		left: 10px;
		top: 10px;
		cursor: pointer;
	}
	
	.smCircular1 {
		background-color: #5CB85C;
		transition: transform 1s ease-in-out;
		-webkit-transition: -webkit- transform 1s ease-in-out;
		-o-transition: -o-transform 1s ease-in-out;
		-moz-transition: -moz-transform 1s ease-in-out;
		transform-origin: bottom;
		-webkit-transform-origin: bottom;
		-o-transform-origin: bottom;
		-moz-transform-origin: bottom;
	}
	
	.bigCircular:hover .smCircular1 {
		transform: rotateX(-180deg);
		-webkit-transform: rotateX(-180deg);
		-o-transform: rotateX(-180deg);
		-moz-transform: rotateX(-180deg);
	}
	
	.smCircular2 {
		text-align: center;
		padding-top: 80px;
		background-color: #262626;
		z-index: -10;
	}
	
	.smCircular2 a {
		color: #fff;
	}
</style>
<script>
import goTop from 'components/Home/goTop';
	export default {
		name: 'css2',
		components:{
			goTop
		},
		created: function() {
			window.scrollTo(0, 0);
		}
	}
</script>