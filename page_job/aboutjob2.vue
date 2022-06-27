<template>
	<!-- 动态扩展节点 -->
	<div>
		<!--width,height 画布的宽度，高度。 可以是百分比或像素，一般在dom元素上设置 -->
		<div id="network_id" class="network" style="height:80vh"></div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				nodes: [],
				edges: [],
				// network:null,
				container: null,
				//   节点数组
				nodesArray: [{
						id: 0,
						name: "大前端",
						color: {
							background: "#fd91b7"
						},
					},
					{
						id: 1,
						name: "HTML",
						color: {
							background: "#7ed6df"
						},
					},
					{
						id: 2,
						name: "JavaScript",
						color: {
							background: "#d294e2"
						},
					},
					{
						id: 3,
						name: "CSS",
						color: {
							background: "#ffb300"
						},
					},
				],
				//   关系线数组
				edgesArray: [{
						id: "e1",
						from: 0,
						to: 1,
						label: "ddd"
					},
					{
						id: "e2",
						from: 1,
						to: 0,
						label: "aaa"
					},
					{
						id: "e3",
						from: 0,
						to: 2,
						label: "step1"
					},
					{
						id: "e4",
						from: 0,
						to: 3,
						label: "step1"
					},
				],
				options: {},
				data: {},
				nodeExtendArr: [], //已扩展的节点
			};
		},
		methods: {
				}
	};
</script>
<script module="renderScript" lang="renderjs">
	import Vis from "vis";
	export default {
		mounted() {
			console.log('123')
			// 初始化
			this.init();
			this.network.moveTo({
				scale: 0.8
			});
			var param = {
				nodes: this.nodesArray,
				edges: this.edgesArray
			};
			// 创建network
			this.addNetworkParams(param);
			// 鼠标双击事件
			this.network.on("doubleClick", (e) => {
				if (e.nodes.length != 0) {
					console.log(e.nodes[0]);
					//获取需要的参数，获取参数后可到后台获取扩展后的数据
					var id = e.nodes[0];
					console.log(this.nodeExtendArr, this.nodeExtendArr.indexOf(id));
					if (this.nodeExtendArr.indexOf(id) != -1) {
						this.$message.warning("该节点已经扩展");
					} else {
						//每个节点只能扩展一次,nodeExtendArr记录已扩展的节点
						this.nodeExtendArr.push(id);
						// 模拟后端传回的数据
						if (id == "0") {
							param = {
								nodes: [{
										id: 0,
										name: "大前端",
										color: {
											background: "#fd91b7"
										},
									},
									{
										id: 1,
										name: "HTML",
										color: {
											background: "#7ed6df"
										},
									},
									{
										id: 2,
										name: "JavaScript",
										color: {
											background: "#d294e2"
										},
									},
									{
										id: 3,
										name: "CSS",
										color: {
											background: "#ffb300"
										},
									},
									{
										id: 4,
										name: "三大主流框架",
										color: {
											background: "#7ed6df"
										},
									},
								],
								edges: [{
										id: "e1",
										from: 0,
										to: 1,
										label: "ddd"
									},
									{
										id: "e2",
										from: 1,
										to: 0,
										label: "aaa"
									},
									{
										id: "e3",
										from: 0,
										to: 2,
										label: "step1"
									},
									{
										id: "e4",
										from: 0,
										to: 3,
										label: "step1"
									},
									{
										id: "e5",
										from: 0,
										to: 4,
										label: "step1"
									},
								],
							};
						}
						//模拟后台获取扩展后的节点
						this.addNetworkParams(param);
					}
				}
			});
			this.network.on("dragEnd", (e) => {
				if (e.nodes && e.nodes.length > 0) {
					// 拖拽节点后,使得节点可以固定不动
					this.network.clustering.updateClusteredNode(e.nodes[0], {
						physics: false,
					});
				}
			});
		},
		methods: {
			//初始化
			init() {
				console.log('123')
				this.nodes = new Vis.DataSet([]);
				this.edges = new Vis.DataSet([]);
				this.container = document.getElementById("network_id");
				this.data = {
					nodes: this.nodes,
					edges: this.edges,
				};
				this.options = {
					autoResize: true, //网络将自动检测其容器的大小调整，并相应地重绘自身
					locale: "cn", //语言设置：工具栏显示中文
					//设置语言
					locales: {
						cn: {
							//工具栏中文翻译
							edit: "编辑",
							del: "删除当前节点或关系",
							back: "返回",
							addNode: "添加节点",
							addEdge: "添加连线",
							editNode: "编辑节点",
							editEdge: "编辑连线",
							addDescription: "点击空白处可添加节点",
							edgeDescription: "点击某个节点拖拽连线可连接另一个节点",
							editEdgeDescription: "可拖拽连线改变关系",
							createEdgeError: "无法将边连接到集群",
							deleteClusterError: "无法删除集群.",
							editClusterError: "无法编辑群集'",
						},
					},
					// 设置节点样式
					nodes: {
						shape: "dot", //节点的外观。为circle时label显示在节点内，为dot时label显示在节点下方
						size: 30, //节点的大小，
						shadow: false, //如果为true，则节点使用默认设置投射阴影。
						font: {
							//字体配置
							size: 20,
							color: "rgb(117, 218, 167)",
							align: "center",
						},
						color: {
							border: "transparent", //节点边框颜色
							background: "#ffc7c7", //节点背景颜色
							highlight: {
								//节点选中时状态颜色
								border: "rgb(117, 218, 167)",
								background: "rgb(117, 218, 167)",
							},
							hover: {
								//节点鼠标滑过时状态颜色
								border: "#dff9fb",
								background: "#88dab1",
							},
						},
						margin: 5, //当形状设置为box、circle、database、icon、text；label的边距
						widthConstraint: 100, //设置数字，将节点的最小和最大宽度设为该值,当值设为很小的时候，label会换行，节点会保持一个最小值，里边的内容会换行
						borderWidth: 1, //节点边框宽度，单位为px
						borderWidthSelected: 3, //节点被选中时边框的宽度，单位为px
						labelHighlightBold: false, //确定选择节点时标签是否变为粗体
					},
					// 边线配置
					edges: {
						width: 1,
						length: 200,
						color: {
							color: "#848499",
							highlight: "rgb(117, 218, 167)",
							hover: "#88dab1",
							inherit: "from",
							opacity: 1.0,
						},
						font: {
							color: "#343434",
							size: 18, // px
							face: "arial",
							background: "none",
							strokeWidth: 2, // px
							strokeColor: "#ffffff",
							align: "horizontal",
							multi: false,
							vadjust: 0,
							bold: {
								color: "#343434",
								size: 14, // px
								face: "arial",
								vadjust: 0,
								mod: "bold",
							},
							ital: {
								color: "#343434",
								size: 14, // px
								face: "arial",
								vadjust: 0,
								mod: "italic",
							},
							boldital: {
								color: "#343434",
								size: 14, // px
								face: "arial",
								vadjust: 0,
								mod: "bold italic",
							},
							mono: {
								color: "#343434",
								size: 15, // px
								face: "courier new",
								vadjust: 2,
								mod: "",
							},
						},
						shadow: false,
						smooth: {
							//设置两个节点之前的连线的状态
							enabled: true, //默认是true，设置为false之后，两个节点之前的连线始终为直线，不会出现贝塞尔曲线
						},
						arrows: {
							to: true
						}, //箭头指向to
					},
					//计算节点之前斥力，进行自动排列的属性
					physics: {
						enabled: true, //默认是true，设置为false后，节点将不会自动改变，拖动谁谁动。不影响其他的节点
						barnesHut: {
							gravitationalConstant: -4000,
							centralGravity: 0.3,
							springLength: 120,
							springConstant: 0.04,
							damping: 0.09,
							avoidOverlap: 0,
						},
					},
					//用于所有用户与网络的交互。处理鼠标和触摸事件以及导航按钮和弹出窗口
					interaction: {
						hover: true,
						dragNodes: true, //是否能拖动节点
						dragView: true, //是否能拖动画布
						hover: true, //鼠标移过后加粗该节点和连接线
						multiselect: true, //按 ctrl 多选
						selectable: true, //是否可以点击选择
						selectConnectedEdges: true, //选择节点后是否显示连接线
						hoverConnectedEdges: true, //鼠标滑动节点后是否显示连接线
						zoomView: true, //是否能缩放画布
					},
					//操作模块:包括 添加、删除、获取选中点、设置选中点、拖拽系列、点击等等
					manipulation: {
						enabled: true, //该属性表示可以编辑，出现编辑操作按钮
						addNode: true,
						addEdge: true,
						// editNode: undefined,
						editEdge: true,
						deleteNode: true,
						deleteEdge: true,
					},
				};
				this.network = new Vis.Network(this.container, this.data, this.options);
			},
			//扩展节点 增加nodes和edges集合参数
			addNetworkParams(param) {
				if (param.nodes && param.nodes.length > 0) {
					//去除已存在的节点  以“id”属性为例删除重复节点，根据具体的属性自行修改
					for (var i in this.network.body.data.nodes._data) {
						var nodeTemp = this.network.body.data.nodes._data[i];
						param.nodes = deleteValueFromArr(param.nodes, "id", nodeTemp.id);
					}
				}
				//添加节点
				for (var i = 0; i < param.nodes.length; i++) {
					var node = param.nodes[i];
					this.nodes.add({
						label: node.name,
						...node,
					});
				}
				if (param.edges && param.edges.length > 0) {
					//去除已存在的关系  以“id”属性为例删除重复节点，根据具体的属性自行修改
					for (var i in this.network.body.data.edges._data) {
						var edgeTemp = this.network.body.data.edges._data[i];
						param.edges = deleteValueFromArr(param.edges, "id", edgeTemp.id);
					}
				}
				//添加关系
				for (var i = 0; i < param.edges.length; i++) {
					var edge = param.edges[i];
					this.edges.add({
						...edge,
					});
				}
		
				//根据对象组数中的某个属性值进行过滤删除
				//arrName数组名  id过滤的字段   keyValue字段值
				function deleteValueFromArr(arrName, id, keyValue) {
					if (arrName == null || arrName.length == 0) {
						return null;
					}
					for (var i = 0; i < arrName.length; i++) {
						if (arrName[i][id] == keyValue) {
							arrName.splice(i, 1);
						}
					}
					return arrName;
				}
			},
		},
	}
</script>
<style lang="less">
	.circle-option {
		position: absolute;
		left: 0px;
		top: 0px;
		width: 100px;
		height: 100px;
		border: 30px solid rgba(200, 200, 200, 0.7);
		border-radius: 50px;
		box-sizing: border-box;
		z-index: 10;
		display: none;

		span {
			position: absolute;
			left: 0;
			right: 0;
			width: 30px;
			height: 20px;
			line-height: 20px;
			text-align: center;
			font-size: 10px;
			cursor: pointer;

			&:hover {
				color: #1b68ff;
			}

			&:nth-child(1) {
				left: 5px;
				top: -25px;
			}

			&:nth-child(2) {
				left: 37px;
				top: -5px;
			}

			&:nth-child(3) {
				left: 37px;
				top: 25px;
			}

			&:nth-child(4) {
				left: 5px;
				top: 44px;
			}

			&:nth-child(5) {
				left: -27px;
				top: 25px;
			}

			&:nth-child(6) {
				left: -27px;
				top: -5px;
			}
		}
	}
</style>
