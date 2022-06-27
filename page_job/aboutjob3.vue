<template>
	<div id="mynetwork"></div>
</template>

<script>
</script>

<script module="test" lang="renderjs">
	export default {
		mounted() {
				console.log('123')
				const script = document.createElement('script')
							// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
							script.src = 'https://unpkg.com/vis-network/standalone/umd/vis-network.min.js'
							document.head.appendChild(script)
			   var nodes = new vis.DataSet([
			        { id: 1, label: "Node 1" },
			        { id: 2, label: "Node 2" },
			        { id: 3, label: "Node 3" },
			        { id: 4, label: "Node 4" },
			        { id: 5, label: "Node 5" }
			    ]);
			
			    // 创建边数据数组
			    var edges = new vis.DataSet([
			        { from: 1, to: 3 },
			        { from: 1, to: 2 },
			        { from: 2, to: 4 },
			        { from: 2, to: 5 },
			        { from: 3, to: 3 }
			    ]);
			
			    // 获取容器
			    var container = document.getElementById('mynetwork');
			
			    // 将数据赋值给vis 数据格式化器
			    var data = {
			        nodes: nodes,
			        edges: edges
			    };
			    var options = {};
			
			    // 初始化关系图
			    var network = new vis.Network(container, data, options);
		},
	}
</script>

<style>
	        #mynetwork {
	            width: 600px;
	            height: 400px;
	            border: 1px solid lightgray;
	        }
</style>
