

tc('[Kosto]','Shizoval Is Ready,Please enter the battlefield before opening the menu!')
	//Shizoval
	
		let functions,
		array,
		callBack,
		object,
		nativeList,
		components,
		mesh,
		visible,
		positionName,
		x,
		y,
		z,
		arrayList2,
		index = 0,
		distance;
	
	GM_addStyle(`
	  .shizoval_content {
		position: absolute;
		font-size: 17px;
		text-shadow: 0px 0px 3px 2px black;
		z-index: 9999;
		top: 10%;
		left: 10%;
		min-height: 580px;
		min-width: 800px;
		border-radius: 16px;
		background: linear-gradient(29deg, rgba(0,0,0,0.349544783733806) 0%, rgba(42,42,42,0.7198529069831057) 70%);
			backdrop-filter: blur(6px);
			filter: brightness(0.8);
		border: 1px solid rgb(255 255 255 / 3%);
		box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.8);
	  }
	
	  .shizoval_content .fly {
		position: absolute;
		top: 13%;
		left: 5%;
		height: 180px;
		width: 90%;
		box-shadow: 0px 0px 16px 5px rgb(0, 0, 0, 0.45);
		background: rgb(255, 255, 255, 0.02);
		border-radius: 16px;
	  }
	
	  .shizoval_content .weapon {
		position: absolute;
		top: 50%;
		left: 5%;
		height: 200px;
		width: 45%;
		box-shadow: 0px 0px 16px 5px rgb(0, 0, 0, 0.45);
		background: rgb(255, 255, 255, 0.02);
		border-radius: 16px;
	  }
	
	  .shizoval_content .other {
		position: absolute;
		top: 50%;
		right: 5%;
		height: 200px;
		width: 40%;
		box-shadow: 0px 0px 16px 5px rgb(0, 0, 0, 0.45);
		background: rgb(255, 255, 255, 0.02);
		border-radius: 16px;
	  }
	
	  .shizoval_content .fly p, .shizoval_content .weapon p, .shizoval_content .other p {
		position: absolute;
		font-size: 20px;
	  }
	
	  .shizoval_content h1 {
		font-size: 30px;
		color: white;
	  }
	
	  .shizoval_content .mines {
		position: absolute;
		bottom: 3%;
		left: 8%;
		font-size: 20px;
	  }
	
	  .shizoval_content .version {
		position: absolute;
		bottom: 3%;
		right: 8%;
		font-size: 20px;
	  }
	
	  .shizoval_content .mines span, .shizoval_content .version span {
		color: #bada55;
	  }
	
	  .notify-message {
		position: absolute;
		left: 50%;
		transform: translate(-50%; -50%);
		top: 10%;
		transition: top 3s ease;
		border-radius: 15px;
		color: white;
		z-index: 99999;
		margin-top: 20px;
		height: 50px;
		min-width: 70px;
		width: auto;
	  }
	
	  .shizoval_content  input[type="checkbox"] {
	  height: 0;
	  width: 0;
	  position: absolute;
	  visibility: hidden;
	}
	
	.shizoval_content  label {
	  cursor: pointer;
	  text-indent: -9999px;
	  width: 50px;
	  height: 25px;
	  box-shadow: inset 0px 0px 13px 2px rgb(0, 0, 0, 0.2);
	  background: rgb(177 177 177 / 11%);
	  border: 2px solid rgb(255, 255, 255, 0.14);
	  display: block;
	  border-radius: 100px;
	  position: absolute;
	}
	
	.shizoval_content  label:after {
	  content: '';
	  position: absolute;
	  top: 2px;
	  left: 5px;
	  width: 18px;
	  height: 18px;
	  background: transparent;
	  border: 2px solid rgb(255, 255, 255, 0.14);
	  border-radius: 90px;
	  transition: 0.3s;
	}
	
	.bindState {
	  color: rgb(255, 255, 255, 0.5);
	  font-size: 20px;
	  position: absolute;
	}
	
	.shizoval_content  input:checked + label {
	  background: #bada559a;
	}
	
	.shizoval_content  input:checked + label:after {
	  left: calc(100% - 5px);
	  border: 2px solid rgb(255, 255, 255, 0.4);
	  transform: translateX(-100%);
	}
	
	.shizoval_content label:active:after {
	  width: 30px;
	}
	
	.shizoval_content input[type="range"] {
		font-size: 1.5rem;
		width: 12.5em;
	}
	
	.shizoval_content input[type="range"] {
		color: #bada55;
		--thumb-height: 1.125em;
		--track-height: 0.125em;
		--track-color: rgba(255, 255, 255, 0.2);
		--brightness-hover: 180%;
		--brightness-down: 80%;
		--clip-edges: 0.125em;
	}
	@media (prefers-color-scheme: dark) {
	.shizoval_content input[type="range"] {
			color: #bada55;
			--track-color: rgba(255, 255, 255, 0.1);
		}
	}
	
	.shizoval_content input[type="range"] {
		position: relative;
		background: #fff0;
		overflow: hidden;
	}
	
	.shizoval_content input[type="range"]:active {
		cursor: grabbing;
	}
	
	.shizoval_content input[type="range"],
	.shizoval_content input[type="range"]::-webkit-slider-runnable-track,
	.shizoval_content input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
		transition: all ease 100ms;
		height: var(--thumb-height);
	}
	
	.shizoval_content input[type="range"]::-webkit-slider-runnable-track,
	.shizoval_content input[type="range"]::-webkit-slider-thumb {
		position: relative;
	}
	
	.shizoval_content input[type="range"]::-webkit-slider-thumb {
		--thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
		--clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
		--clip-bottom: calc(var(--thumb-height) - var(--clip-top));
		--clip-further: calc(100% + 1px);
		--box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
			100vmax currentColor;
	
		width: var(--thumb-width, var(--thumb-height));
		background: linear-gradient(currentColor 0 0) scroll no-repeat left center /
			50% calc(var(--track-height) + 1px);
		background-color: currentColor;
		box-shadow: var(--box-fill);
		border-radius: var(--thumb-width, var(--thumb-height));
	
		filter: brightness(100%);
		clip-path: polygon(
			100% -1px,
			var(--clip-edges) -1px,
			0 var(--clip-top),
			-100vmax var(--clip-top),
			-100vmax var(--clip-bottom),
			0 var(--clip-bottom),
			var(--clip-edges) 100%,
			var(--clip-further) var(--clip-further)
		);
	}
	
	.shizoval_content input[type="range"]:hover::-webkit-slider-thumb {
		filter: brightness(var(--brightness-hover));
		cursor: grab;
	}
	
	.shizoval_content input[type="range"]:active::-webkit-slider-thumb {
		filter: brightness(var(--brightness-down));
		cursor: grabbing;
	}
	
	.shizoval_content input[type="range"]::-webkit-slider-runnable-track {
		background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
			100% calc(var(--track-height) + 1px);
	}
	
	.shizoval_content input[type="range"]:disabled::-webkit-slider-thumb {
		cursor: not-allowed;
	}
	
	/* === Firefox specific styles === */
	.shizoval_content input[type="range"],
	.shizoval_content input[type="range"]::-moz-range-track,
	.shizoval_content input[type="range"]::-moz-range-thumb {
		appearance: none;
		transition: all ease 100ms;
		height: var(--thumb-height);
	}
	
	.shizoval_content input[type="range"]::-moz-range-track,
	.shizoval_content input[type="range"]::-moz-range-thumb,
	.shizoval_content input[type="range"]::-moz-range-progress {
		background: #fff0;
	}
	
	.shizoval_content input[type="range"]::-moz-range-thumb {
		background: currentColor;
		border: 0;
		width: var(--thumb-width, var(--thumb-height));
		border-radius: var(--thumb-width, var(--thumb-height));
		cursor: grab;
	}
	
	.shizoval_content input[type="range"]:active::-moz-range-thumb {
		cursor: grabbing;
	}
	
	.shizoval_content input[type="range"]::-moz-range-track {
		width: 100%;
		background: var(--track-color);
	}
	
	.shizoval_content input[type="range"]::-moz-range-progress {
		appearance: none;
		background: currentColor;
		transition-delay: 30ms;
	}
	
	.shizoval_content input[type="range"]::-moz-range-track,
	.shizoval_content input[type="range"]::-moz-range-progress {
		height: calc(var(--track-height) + 1px);
		border-radius: var(--track-height);
	}
	
	.shizoval_content input[type="range"]::-moz-range-thumb,
	.shizoval_content input[type="range"]::-moz-range-progress {
		filter: brightness(100%);
	}
	
	.shizoval_content input[type="range"]:hover::-moz-range-thumb,
	.shizoval_content input[type="range"]:hover::-moz-range-progress {
		filter: brightness(var(--brightness-hover));
	}
	
	.shizoval_content input[type="range"]:active::-moz-range-thumb,
	.shizoval_content input[type="range"]:active::-moz-range-progress {
		filter: brightness(var(--brightness-down));
	}
	`);
	//菜单样式
	const menu = document.createElement('div');
	menu.innerHTML = `
	  <center><h1>Shizoval For Kosto </h1></center>
	  <div class="fly">
		<p class="hack-name" style="top: 5%; left: 5%;">Fly Hack:</p><span class="bindState" style="top: 5%; left: 24%;">F</span><input type="range" value="120" min="10" max="400" step="1" style="position: absolute; top: 20%; left: 25%; width: 50%"></input><span class="bindState" style="top: 5%; right: 24%;">V</span><input type="checkbox" id="flyHackState"/><label for="flyHackState" style="position: absolute; top: 15%; right: 5%;" ></label>
		<p class="hack-name" style="top: 30%; left: 5%;">Anti-Aim:</p><input type="checkbox" id="antiAimState"/><label for="antiAimState" style="position: absolute; top: 40%; right: 5%;" ></label>
		<p class="hack-name" style="top: 55%; left: 5%;">Freeze Tanks:</p><input type="checkbox" id="freezeState"/><label for="freezeState" style="position: absolute; top: 65%; right: 5%;" ></label>
	  </div>
	  <div class="weapon">
		<p class="hack-name" style="top: 2%; left: 10%;">OneShot:</p><input type="checkbox" id="clumsyState"/><label for="clumsyState" style="position: absolute; top: 10%; right: 10%;"></label>
		<p class="hack-name" style="top: 20%; left: 10%;">AimBot:</p><input type="checkbox" id="aimBotState"/><label for="aimBotState" style="position: absolute; top: 28%; right: 10%;"></label>
		<p class="hack-name" style="top: 38%; left: 10%;">Target:</p><p id="targetState" style="position: absolute; top: 38%; right: 12%; color: #bada55;"></p>
		<p class="hack-name" style="top: 56%; left: 10%;">Shells:</p><p id="shellsCount" style="position: absolute; top: 56%; right: 12%; color: #bada55;">0</p>
	  </div>
	  <div class="other">
		<p class="hack-name" style="top: 2%; left: 5%;">Remove Mine:</p><input type="checkbox" id="RemoveMinesState"/><label for="RemoveMinesState" style="position: absolute; top: 10%; right: 10%;"></label>
		<p class="hack-name" style="top: 20%; left: 5%;">NoEffects:</p><input type="checkbox" id="effectsState"/><label for="effectsState" style="position: absolute; top: 28%; right: 10%;"></label>
		<p class="hack-name" style="top: 38%; left: 5%;">FOV:</p><input type="range" step="0.001" value="1.0471976" min="0.8" max="2" style="position: absolute; top: 48%; left: 25%; width: 35%" id="fovValueState"></input><input type="checkbox" id="fovState"/><label for="fovState" style="position: absolute; top: 46%; right: 10%;"></label>
		<p class="hack-name" style="top: 56%; left: 5%;">Auto Shooting:</p><input type="checkbox" id="autoShotState"/><label for="autoShotState" style="position: absolute; top: 64%; right: 10%;"></label>
	  </div>
	
	  <p class="mines">Mines on map: <span>0</span></p>
	  <p class="version">Version: <span>0.0.1</span></p>
	`;
	
	menu.className = 'shizoval_content';
	menu.style.display = 'none';
	document.body.appendChild(menu);
	
	// 定义一个名为KeyPressing的类
	class KeyPressing {
		// 静态属性k，初始化为一个空数组，用于存储当前被按下的键盘键的keyCode
		static k = [];
	
		// 静态方法i，用于初始化键盘事件监听器
		static i() {
			// 为document添加keydown事件监听器
			document.addEventListener("keydown", e => {
				// 获取被按下的键的keyCode
				const c = e.keyCode;
				// 如果这个keyCode不在静态属性k数组中
				if (KeyPressing.k.includes(c) == false) {
					// 则将其添加到k数组中
					KeyPressing.k.push(c);
				};
			});
	
			// 为document添加keyup事件监听器
			document.addEventListener("keyup", e => {
				// 获取被释放的键的keyCode
				const c = e.keyCode;
				// 如果这个keyCode在静态属性k数组中
				if (KeyPressing.k.includes(c) == true) {
					// 获取该keyCode在k数组中的索引
					const a = KeyPressing.k.indexOf(c);
					// 如果索引不为-1（即确实存在于数组中）
					if (a !== -1) {
						// 则从k数组中移除该元素
						KeyPressing.k.splice(a, 1);
					};
				};
			});
		};
	
		// 静态方法isKeyPressed，用于检查特定的keyCode是否被按下
		static isKeyPressed(c) {
			// 返回k数组是否包含该keyCode
			return KeyPressing.k.includes(c);
		};
	};
	
	// 调用静态方法i来初始化键盘事件监听器
	KeyPressing.i();
	
	// 定义一个名为Utils的类
	class Utils {
		// 构造函数，当创建Utils类的实例时会被调用
		constructor() { 
			console.log('构造函数被调用');
		}
		
		// 定义一个名为rootElement的getter方法，用于获取id为'root'的DOM元素
		get rootElement() {
			return document.getElementById('root');
		}
		
		// 定义一个名为isChatOpen的getter方法，用于检查页面上是否存在类型为text的input元素
		// 如果存在，则意味着聊天窗口是打开的，返回true；否则返回false
		get isChatOpen() {
		   
		return document.querySelectorAll("input[type=text]").length > 0;
		}
		
		// 定义一个名为filterArray的方法，接受一个参数value
		// 这个方法检查value是否不为null，如果不为null，则返回value本身；否则返回undefined
		filterArray = function (value) {
			console.log('调用filterArray方法,参数值为:', value);
			return value != null;
		}
		// 定义一个名为getObjectName的方法，接受一个对象作为参数
		// 这个方法返回对象的构造函数名称，如果对象或其构造函数不存在，则返回undefined
		getObjectName = function (object) {
			console.log("[Kosto]"+object?.constructor?.name);
			return object?.constructor?.name;
		}
	
		// 定义一个名为equal的方法，接受两个参数a和b
		// 这个方法将a和b转换为大写后进行比较，如果相等则返回true，否则返回false
		// 注意这里使用了可选链操作符(?.)，如果a或b为null或undefined，则不会调用toUpperCase方法，而是直接返回false
		equal = (a, b) => {
			console.log('Comparing:', a, 'and', b);
			const upperA = a?.toUpperCase();
			const upperB = b?.toUpperCase();
			console.log('Uppercase values:', upperA, 'and', upperB);
			return upperA === upperB;
		};
	  
		// 定义一个名为fuzzySearch的函数，用于模糊搜索字符串
		fuzzySearch = function (needle, haystack) {
		console.log('Fuzzy searching:', needle, 'in', haystack);
		
		// 获取目标字符串haystack的长度
		var hlen = haystack.length;
		// 获取搜索模式needle的长度
		var nlen = needle.length;
		
		// 如果搜索模式的长度大于目标字符串的长度，则直接返回false，因为不可能找到更长的子串
		if (nlen > hlen) {
		  console.log('Needle is longer than haystack, returning false');
		  return false;
		};
	  
		// 如果搜索模式的长度等于目标字符串的长度
		if (nlen === hlen) {
		  // 直接比较两个字符串是否相等
		  console.log('Needle and haystack are the same length, comparing directly');
		  return needle === haystack;
		};
	  
		// 使用外层循环遍历搜索模式的每一个字符
		outer: for (var i = 0, j = 0; i < nlen; i++) {
		  // 获取搜索模式当前字符的字符编码
		  var nch = needle.charCodeAt(i);
		  
		  // 使用内层循环遍历目标字符串的每一个字符
		  while (j < hlen) {
			// 如果找到与搜索模式当前字符相同的字符
			if (haystack.charCodeAt(j++) === nch) {
			  console.log('Found matching character at position:', j - 1);
			  // 跳出内层循环，继续外层循环的下一个字符的比较
			  continue outer;
			};
		  };
		  
		  // 如果在目标字符串中没有找到与搜索模式匹配的子串，则返回false
		  console.log('No matching substring found, returning false');
		  return false;
		};
		
		// 如果搜索模式中的所有字符都在目标字符串中按顺序找到，则返回true
		console.log('All characters of the needle were found in the haystack, returning true');
		return true;
	  };
	  
	
		// 定义一个名为findObjectByName的函数，用于在对象中按名称查找子对象
		findObjectByName = function (object, name, index = -1, last = false, fuzzy = false) {
			// 初始化计数器i
			let i = 0;
			// 遍历对象的每一个属性
			for (const key in object) {
				// 如果属性值是一个对象
				if (typeof object[key] === 'object' &&
					// 并且根据fuzzy参数决定是否进行模糊搜索
					(fuzzy ? this.fuzzySearch(name, this.getObjectName(object[key])) :
						// 如果不进行模糊搜索，则直接比较对象名称和给定名称
						this.equal(this.getObjectName(object[key]), name))) {
					// 如果找到了匹配的子对象，根据index参数决定返回什么
					if (index === -1 || index === i) return last ?
						// 如果last为true，则返回包含键和子对象的数组
						[key, object[key]] :
						// 否则只返回子对象
						object[key];
					// 增加计数器i
					i++;
				};
			};
			// 如果没有找到匹配的子对象，函数默认返回undefined
		};
	
		// 定义一个名为pressKey的函数，该函数接受一个参数code，代表要模拟的按键的编码
		pressKey = code => {
			// 创建一个名为key的对象，该对象包含一个code属性，值为传入的code参数
			const key = {
				code: code
			};
	
			// 使用document的dispatchEvent方法触发一个名为'keydown'的键盘事件，并传递之前创建的key对象作为事件的属性
			document.dispatchEvent(new KeyboardEvent('keydown', key));
	
			// 使用document的dispatchEvent方法触发一个名为'keyup'的键盘事件，表示按键抬起，同样传递key对象作为事件的属性
			document.dispatchEvent(new KeyboardEvent('keyup', key));
	
			// 这里有一个错误，dispatchEvent应该是document或者其他元素的方法，而不是一个独立的函数
			// 假设此处意图是在全局作用域内触发事件，则应该改为document.dispatchEvent
			// 触发一个名为'keydown'的键盘事件
			dispatchEvent(new KeyboardEvent('keydown', key));
	
			// 触发一个名为'keyup'的键盘事件，表示按键抬起
			dispatchEvent(new KeyboardEvent('keyup', key));
		};
		// 定义一个名为findByPath的函数，用于根据路径在对象中查找值
		findByPath = function (object, path) {
			// 检查路径是否为字符串或数组，如果不是，则抛出错误
			if (typeof path !== 'string' && !Array.isArray(path)) throw new Error(`路径必须是字符串obj.obj2.obj3…，或数组['obj'，'obj2'，'obj3'…]`);
	
			// 如果路径是字符串，则将其转换为数组
			const arrayPath = Array.isArray(path) ? path : path.split('.');
	
			// 初始化结果变量为传入的对象
			let result = object;
			// 遍历路径数组中的每个元素
			arrayPath.forEach((name, index) => {
				// 如果结果为空，则直接返回
				if (!result) return;
	
				// 检查当前元素是否是路径数组的最后一个元素
				const last = index === arrayPath.length - 1;
	
				// 如果结果对象中包含当前元素名称的属性
				if (result[name]) {
					// 更新结果为该属性的值
					result = result[name];
				}
				// 如果元素名称以'i:'开头，则调用findByIndex方法来查找索引对应的值
				else if (name.slice(0, 2) === 'i:') {
					result = this.findByIndex(result, name.slice(2, name.length), last);
				}
				// 如果元素名称以'fuzzy:'开头，则调用findObjectByName方法进行模糊搜索
				else if (name.slice(0, 6) === 'fuzzy:') {
					result = this.findObjectByName(result, name.slice(6, name.length), -1, last, true);
				}
				// 如果元素名称包含':'，则将其分割，并调用findObjectByName方法查找
				else {
					const split = name.split(':');
					if (split.length === 2) {
						result = this.findObjectByName(result, split[0], +split[1], last);
					} else {
						result = this.findObjectByName(result, name, -1, last);
					}
				}
	
				// 如果结果不是对象，则直接返回结果
				if (typeof result !== 'object') return result;
			});
	
			// 返回最终查找结果
			return result;
		};
	
	
		// 定义getComponentNames函数，接受一个参数element
		getComponentNames = function (element) {
			// 如果element不是对象也不是函数，则直接返回，不进行后续处理
			if (typeof element !== 'object' && typeof element !== 'function') return;
			// 初始化一个空对象result，用于存储结果
			const result = {};
	
			// 遍历element对象的所有属性和值
			for (const [key, value] of Object.entries(element)) {
				// 如果值是一个数组，则直接将该键值对添加到result中
				if (Array.isArray(value)) {
					result[key] = value;
					continue; // 继续下一个循环迭代
				}
	
				// 如果值是一个函数，并且该函数具有callableName属性
				if (typeof value === 'function' && value.callableName) {
					// 则以callableName作为键，将原值添加到result中
					result[value.callableName] = element[key];
					continue; // 继续下一个循环迭代
				}
	
				// 尝试获取值的构造函数上的$metadata$属性的simpleName属性
				const name = value?.constructor?.$metadata$?.simpleName;
	
				// 如果name不存在，则跳过当前循环迭代
				if (!name) continue;
	
				// 如果result中已经存在与name相同的键
				if (result[name]) {
					// 则生成一个新的键名，通过在原name后加上一个递增的下标来避免冲突
					for (let i = 0; ; i++) {
						const tempName = `${name}_${i}`;
	
						// 如果新的键名在result中不存在
						if (!result[tempName]) {
							// 则将原值添加到result中，并使用新的键名
							result[tempName] = value;
							break; // 跳出循环
						}
					}
				} else {
					// 如果result中不存在与name相同的键，则直接将原值添加到result中，使用原name作为键名
					result[name] = value;
				}
			}
	
			// 在result对象中添加一个名为'original'的属性，其值为原始的element对象
			result['original'] = element;
	
			// 返回result对象，它包含了从element对象中提取和整理后的组件名称和对应的值
			return result;
		}
	
		getByProto = function (arr, name, index) {
			if ((!arr) || (!name) || (!index)) return;
			const components = arr;
			for (const component of components) {
				const prototype = component?.__proto__;
				const init = Object.values(prototype)[index];
				if (init?.toString()?.includes(name)) {
					return component;
				};
			};
		};
	
	
	
		getObj = function (arr, name, index) {
			if ((!arr) || (!name) || (!index)) return;
			const components = arr;
			for (const component of components) {
				if (typeof component == 'object') {
					const prototype = component?.__proto__;
					const init = Object.values(prototype)[index];
					if (init?.toString()?.includes(name)) {
						return component;
					};
				};
			};
		}
	
	
		findByIndex = (object, index, last = false) => {
			const entries = Object.entries(object)?.[index];
	
			if (last)
				return entries;
	
			if (typeof entries?.[1] === 'object')
				return entries[1];
	
			return entries?.[0];
		};
	
	
		getByLength = function (obj, length) {
			let validObjects = [];
			for (let i = 0; i < obj.length; i++) {
				let objectsArray = [];
				for (let key in obj[i]) {
					if (typeof obj[i][key] == 'object') {
						objectsArray.push(obj[i][key]);
					};
				};
	
				if (objectsArray.length == length) validObjects.push(objectsArray);
			};
			return validObjects;
		};
	
	
		componentStarter = function (obj, visited = new Set()) {
			if (visited.has(obj)) {
				return null;
			};
	
			visited.add(obj);
	
			if (obj?.constructor?.$metadata$?.simpleName === "ModalComponent") {
				return obj;
			};
	
			for (let key in obj) {
				if (typeof obj[key] === "object") {
					const result = this.componentStarter(obj[key], visited);
					if (result) {
						return result;
					};
				};
			};
	
			return null;
		};
	
		get rootObject() {
			if (this.rootElement) {
				return this.componentStarter(this.rootElement);
			} else {
				return;
			};
		};
	
		// 定义 isGameReady getter 方法
		get isGameReady() {
		// 获取 rootObject 属性值，该属性可能代表游戏的主组件或根对象
		const component = this.rootObject;
		
		// 如果 rootObject 不存在，则直接返回，不执行后续检查
		if (!component) return;
	
		// 调用 getBySimpleName 方法，尝试从 component 中获取名为 "" 的对象或属性，
		// 这可能是一个内部方法，用于查找特定名称的对象或属性
		const TOState = this.getBySimpleName(component, "");
	
		// 再次调用 getBySimpleName 方法，尝试从 TOState 中获取名为 "" 的对象或属性
		const Store = this.getBySimpleName(TOState, "");
	
		// 尝试从 Store 对象中获取 ThreadSafeList 属性，
		// 这里使用了一个可选链（?.）来安全地访问属性，如果 Store 为 null 或 undefined，则整个表达式返回 undefined
		const ThreadSafeList = Object.entries(Store)?.[1]?.[1];
	
		// 如果 ThreadSafeList 不存在（即 undefined），则直接返回，表示游戏尚未准备好
		if (ThreadSafeList == void 0) return;
	
		// 尝试从 ThreadSafeList 对象中获取第二个属性（索引为 1 的元素）的值
		const ThreadSafeListValue = Object.entries(ThreadSafeList)?.[1]?.[1];
	
		// 使用 getByLength 方法从 ThreadSafeListValue 中获取长度为 3 的属性或对象的第一个元素
		// 这个方法可能用于根据属性的长度来过滤或查找特定的对象或属性
		const BattleEntity = this.getByLength(ThreadSafeListValue, 3)?.[1]?.[0];
	
		// 如果 BattleEntity 存在，则返回 true，表示游戏已经准备好；否则返回 false
		return BattleEntity ? true : false;
		};
		// 定义一个名为 getByName 的函数，该函数接收两个参数：obj（要搜索的对象）和 name（要查找的构造函数名称）
		getByName = function (obj, name) {
			// 使用 for...in 循环遍历 obj 对象的所有可枚举属性
			for (const key in obj) {
				// 检查当前属性的构造函数名称是否与目标名称 name 匹配
				// 并且确保该属性是一个对象（而不是其他类型）
				if (obj[key]?.constructor?.name === name && typeof obj[key] === "object") {
					// 如果找到匹配项，则返回该属性（即对象）
					return obj[key];
				};
			};
			// 如果没有找到任何匹配项，则返回 undefined
		};
	
		// 定义一个名为 getBySimpleName 的函数，该函数接收两个参数：obj（要搜索的对象）和 simpleName（要查找的简单名称）
		getBySimpleName = function (obj, simpleName) {
			// 使用 for...in 循环遍历 obj 对象的所有可枚举属性
			for (const key in obj) {
				// 检查当前属性的构造函数中的 $metadata$ 属性是否存在，并且其 simpleName 属性是否与传入的 simpleName 参数匹配
				// 同时确保该属性是一个对象（而不是其他类型）
				if (obj[key]?.constructor?.$metadata$?.simpleName === simpleName && typeof obj[key] === "object") {
					// 如果找到匹配项，返回该属性（即对象）
					return obj[key];
				}
			}
			// 如果没有找到任何匹配项，则函数不会返回任何值（即返回 undefined）
		};
		// 定义一个名为 errorLog 的函数，该函数接受一个参数 text
		errorLog = function (text) {
			// 使用 throw 关键字抛出一个新的 Error 对象
			// 这个 Error 对象的消息是由字符串 '[shizoval] ' 和传入的 text 参数拼接而成
			throw new Error('[shizoval] ' + text);
		};
	
		// 定义一个名为notify的函数，它接受两个参数：text（要显示的文本）和color（背景颜色）
		notify = function (text, color) {
			// 创建一个新的div元素，并将其引用赋值给变量label
			const label = document.createElement('div');
			// 设置label元素的innerHTML属性，即其内部HTML内容，为传入的text参数
			label.innerHTML = text;
			// 设置label元素的背景颜色样式为传入的color参数
			label.style.backgroundColor = color;
			// 给label元素添加一个CSS类名'notify-message'，以便通过CSS进行样式化
			label.className = 'notify-message';
			// 将label元素追加到文档的body元素中，使其显示在网页上
			document.body.appendChild(label);
			// 使用setTimeout函数设置一个2秒（2000毫秒）后执行的回调函数
			setTimeout(() => {
				// 在回调函数中，将label元素的top样式属性设置为"-100%"
				// 这可能意图是让通知消息向上滑动并消失，但缺少相应的CSS动画或过渡效果
				label.style.top = "-100%";
			}, 2000);
		};
	
		// 定义一个名为getRandom的函数，它接受两个参数：min（最小值）和max（最大值）
		getRandom = function (min, max) {
			// 返回一个在[min, max)范围内的随机数
			// Math.random()生成一个[0, 1)范围内的随机数，乘以(max - min)后加上min，得到所需范围的随机数
			return Math.random() * (max - min) + min;
		};
		};
	
	
		// 定义一个函数，用于获取玩家的名字
		function getPlayerName() {
			// 检查是否启用了'clumsy'特性，并且'objects'及其'features'、'weapon'属性都存在
			if (objects.features?.weapon?.clumsyEnabled == true) {
				// 使用document.querySelector方法查找具有特定CSS选择器的DOM元素
				// 该选择器指向一个可能包含玩家名字的span元素
				const dk = document.querySelector(
					'#modal-root > div > div > div.ContextMenuStyle-menuItem.ContextMenuStyle-menuItemRank > div > div > div > span'
				)?.innerText.replace(/^\s*\[(.*?)\]\s*/, '').trim();
	
				// 如果找到了该元素，并且它的innerText属性非空
				if (dk) {
					// 将找到的玩家名字赋值给targetNick变量
					targetNick = dk;
					
					// 调用objects的features的weapon的getTarget方法（假设该方法存在）
					objects?.features?.weapon?.getTarget();
					
					// 将目标昵称显示在id为'targetState'的DOM元素中
					document.querySelector('#targetState').innerText = targetNick;
				}
			}
		}
	
		// 使用setInterval方法每25毫秒调用一次getPlayerName函数
		// 这意味着该函数将定期执行，以尝试获取并更新玩家的名字
		setInterval(getPlayerName, 25);
	
	// 定义一个名为 ObjectsKosto 的类
	class ObjectsKosto {
		// 构造函数，用于初始化类的实例
		constructor() { };
	
		// 定义一个名为 TOState 的 getter 方法
		get TOState() {
			// 调用 utils.getBySimpleName 方法，从 utils.rootObject 中获取一个名为 "" 的对象
			// 假设这个方法用于查找具有简单名称的对象
			return utils.getBySimpleName(utils.rootObject, "");
		};
	
		// 定义一个名为 userName 的 getter 方法
		get userName() {
			// 调用 utils.findByPath 方法，从 objects.ObjectsKosto.user 中查找路径为 "i:0.i:15" 的对象
			// 并返回该路径下的第二个元素（索引为1的元素）
			return utils.findByPath(objects.ObjectsKosto.user, "i:0.i:15")[1];
		};
	
	
		// 定义一个名为 store 的 getter 方法
		get store() {
			// 调用 utils.getBySimpleName 方法，从 TOState 中获取一个名为 "" 的对象
			// 假设 TOState 是之前定义的 TOState getter 方法返回的对象
			return utils.getBySimpleName(this.TOState, "");
		};
	
		// 定义一个名为 user 的 getter 方法
		get user() {
			// 调用 utils.findByPath 方法，从 objects.ObjectsKosto.TOState 中查找路径为 "i:3.i:4" 的对象
			// 并返回该路径下的第二个元素（索引为1的元素）
			return utils.findByPath(objects.ObjectsKosto.TOState, "i:3.i:4")[1];
		};
	
		// 在 ObjectsKosto 类中定义一个名为 world 的对象
		world = {
			// 在 world 对象中定义一个名为 world 的 getter 方法
			get world() {
				// 检查游戏是否已准备好，如果没有准备好则直接返回
				if (!utils.isGameReady) return;
	
				// 定义变量 component，并将其初始化为 utils.rootObject
				const component = utils.rootObject;
	
				// 从 component 中获取一个名为 "" 的对象，并将其赋给 TOState
				const TOState = utils.getBySimpleName(component, "");
	
				// 从 TOState 中获取一个名为 "" 的对象，并将其赋给 Store
				const Store = utils.getBySimpleName(TOState, "");
	
				// 从 Store 对象中获取第二个元素的值（索引为1的元素），并将其赋给 ThreadSafeList
				const ThreadSafeList = Object.entries(Store)[1][1];
	
				// 检查 ThreadSafeList 是否为 undefined，如果是则直接返回
				if (ThreadSafeList == void 0) return;
	
				// 从 ThreadSafeList 对象中获取第二个元素的值（索引为1的元素），并将其赋给 ThreadSafeListValue
				const ThreadSafeListValue = Object.entries(ThreadSafeList)[1][1];
	
				// 从 ThreadSafeListValue 中获取长度为 3 的对象的第一个元素（索引为0的元素）的第一个属性（索引为0的属性）
				// 并将其赋给 BattleEntity
				const BattleEntity = utils.getByLength(ThreadSafeListValue, 3)[1][0];
	
				// 从 BattleEntity 对象中获取组件名称，并将其赋给 world
				const world = utils.getComponentNames(Object.entries(BattleEntity)[1][1]);
	
				// 返回 world 对象
				return world;
			}
	};
	// 定义一个名为 gameMode 的 getter 方法
	get gameMode() {
		// 检查游戏是否已准备好，如果没有准备好则直接返回
		if (!utils.isGameReady) return;
		
		// 获取当前世界的引用
		const world = this.world.world;
		
		// 从世界中获取组件名称，这里假设 world 是一个对象，它有一个叫做 getComponentNames 的方法
		// 该方法返回一个对象，该对象中包含了 world 对象中各个组件的名称和对应的值
		// ArrayList_0 可能是这个返回对象中某个特定的数组属性
		const t0 = utils.getComponentNames(world).ArrayList_0;
		
		// 从 t0 中获取第二个元素的值（索引为 1，因为数组索引从 0 开始），这里假设 t0 是一个数组
		const t1 = Object.entries(t0)[1][1];
		
		// 对 t1[0] 调用 getComponentNames 方法，获取其组件名称和对应的值
		// 这里假设 t1[0] 是一个对象，它有一个叫做 getComponentNames 的方法
		const t2 = utils.getComponentNames(t1[0]);
		
		// 从 t2 的 original 属性中获取第六个元素的值（索引为 5，因为数组索引从 0 开始）
		// 这里假设 t2 是一个对象，它有一个叫做 original 的属性，该属性是一个数组
		const t3 = Object.entries(t2.original)[5][1];
		
		// 从 t3 中获取第一个元素的值（索引为 0），这里假设 t3 是一个数组
		// 这个值被假设为游戏模式的表示
		const gameMode = Object.entries(t3)[0][1];
		
		// 返回获取到的游戏模式
		return gameMode;
	
	};
	
		// 定义一个名为game的getter方法
	get game() {
		// 调用utils对象的findByPath方法，尝试在objects.ObjectsKosto.world.world路径下找到指定的对象
		// 路径为"ArrayList_0.i:1.0"，然后返回找到的对象
		return utils.findByPath(objects.ObjectsKosto.world.world, "ArrayList_0.i:1.0");
	};
	
	// 定义一个名为mines的 getter方法
	get mines() {
		// 如果游戏尚未准备就绪，则直接返回，不执行后续代码
		if (!utils.isGameReady) return;
	
		// 调用utils对象的getObj方法，获取this.gameMode对象的putMine属性的值（这里传入了参数1），
		// 返回一个对象，并通过Object.entries()转换为键值对数组
		const minesPath = Object.entries(utils.getObj(this.gameMode, 'putMine', 1))[11][1];
	
		// 使用utils.findByPath方法，在minesPath指定的路径下查找对象，路径为'i:1'
		// 假设该方法返回的是一个数组，并取出数组的第二个元素（索引为1）
		const minesArraya = utils.findByPath(minesPath, 'i:1')[1];
	
		// 将minesArraya对象再次通过Object.entries()转换为键值对数组，并取出第二个键值对的值
		// 即获取了minesArray变量中存储的值
		const minesArray = Object.entries(minesArraya)[1][1];
	
		// 返回minesArray变量，即返回地雷数组
		return minesArray;
	};  
	
		get shellFactory() {
			if (!utils.isGameReady) return;
			return utils.getByProto(objects.ObjectsKosto.localTank.components, "createShell", 2);
		};
	
		get validShells() {
			const Shells = utils.getByProto(objects.ObjectsKosto.localTank.components, 'createShell', 2);
			if (!Shells) return;
			const CacheImpl = Object.entries(Shells)[3][1];
	
			return Object.entries(utils.getByName(CacheImpl, "In"))[1][1];
		};
	
		localTank = {
			get components() {
				if (!utils.isGameReady) return;
				const component = utils.rootObject,
					TOState = utils.getBySimpleName(component, ""),
					Store = utils.getBySimpleName(TOState, ""),
					ThreadSafeList = Object.entries(Store)[1][1];
	
				if (ThreadSafeList == void 0) return;
	
				const ThreadSafeListValue = Object.entries(ThreadSafeList)[1][1];
	
				const BattleEntity = utils.getByLength(ThreadSafeListValue, 3)[1][0],
					TankArray = Object.entries(BattleEntity)[5][1],
					ComponentList = Object.entries(TankArray)[0][1];
	
				return ComponentList;
			},
	
			get tankPhysics() {
				if (!utils.isGameReady) return;
				return utils.getByProto(objects.ObjectsKosto.localTank.components, "setPhysicsTransform", 7);
			},
	
			get targetingSystem() {
				if (!utils.isGameReady) return;
				return utils.getByProto(objects.ObjectsKosto.localTank.components, "tankInputComponent", 4);
			}
		};
	
		get players() {
			if (!utils.isGameReady) return;
			const TankComponent = utils.getByProto(objects.ObjectsKosto.localTank.components, 'tankPhysicsComponent', 6);
			const gameModes = Object.entries(TankComponent)[7][1],
				gameMode = utils.findByPath(gameModes, "i:7")[1];
	
			const tanks = utils.findByPath(gameMode, "i:8")[1],
				tanksArray = utils.findByPath(tanks, "i:1")[1],
				tanksOnField = utils.findByPath(tanksArray, "i:0")[1];
	
			return tanksOnField
		};
	};
	
	class Features {
		constructor() { };
	
		weapon = {
			aimBotEnabled: false,
			clumsyEnabled: false,
			target: void 0,
	
			get params() {
				if (!objects.features) return;
				if (!utils.isGameReady) return;
	
				const targetingSystem = objects.ObjectsKosto?.localTank.targetingSystem;
				const horizontalAiming = utils.findByPath(objects.ObjectsKosto?.localTank.targetingSystem, "i:10.i:1")[1],
					RootAiming = utils.findByPath(objects.ObjectsKosto?.localTank.targetingSystem, "i:10")[1];
	
				return {
					horizontalAiming: horizontalAiming,
					RootAiming: RootAiming,
				};
			},
	
			setSpeed: function () {
				if (!objects.features) return;
				if (!utils.isGameReady) return;
	
				const ShellsFactory = objects.ObjectsKosto?.shellFactory;
				const CCShells = Object.entries(ShellsFactory)[7][1];
	
	
	
				if (objects.features?.weapon?.clumsyEnabled) {
					CCShells[Object.keys(CCShells)[6]] = 0.0001;
					CCShells[Object.keys(CCShells)[4]] = 0.0001;
				}
			},
	
			getTarget: function () {
				if (!objects.features) return;
				if (!utils.isGameReady) return;
	
				objects.features.weapon.setSpeed();
	
				const ShellsFactory = objects.ObjectsKosto?.shellFactory;
				const CCShells = Object.entries(ShellsFactory)[7][1],
					players = objects.ObjectsKosto.players;
	
				if (!objects?.features?.weapon?.clumsyEnabled) return;
	
				for (const player of players) {
					const ForEnemyNativeList = Object.entries(player)[5][1],
						EnemyNativeList = Object.entries(ForEnemyNativeList)[0][1],
						ForTankPhysics = utils.getByProto(EnemyNativeList, 'setPhysicsTransform', 7);
	
					const EnemyBody = Object.entries(ForTankPhysics)[17][1],
						ForEnemyBodyState = Object.entries(EnemyBody)[24][1],
						EnemyBodyState = Object.entries(ForEnemyBodyState)[3][1];
	
					const ForNick = utils.getByProto(EnemyNativeList, "setClan", 4);
					if (ForNick == void 0) continue;
	
					const Nick = Object.entries(ForNick)?.[4]?.[1];
					if (Nick == targetNick) this.target = EnemyBodyState;
				};
			},
	
			aimBot: function () {
				if (!(objects.features || Utils.isGameReady)) return;
	
				const horizontalAiming = objects.features?.weapon.params.horizontalAiming;
				const rootAiming = objects.features?.weapon.params.RootAiming;
	
				const horizontalAimingEnabled = utils.findByPath(rootAiming, 'i:3')?.[0],
					directionsCount = utils.findByPath(horizontalAiming, 'i:0')?.[0],
					angleStep = utils.findByPath(horizontalAiming, 'i:1')?.[0];
	
				if (objects.features?.weapon.aimBotEnabled) {
					if (rootAiming && directionsCount) {
						rootAiming[horizontalAimingEnabled] = true;
						horizontalAiming[directionsCount] = 250;
						horizontalAiming[angleStep] = 0.1;
					}
	
					else {
						return;
					};
				}
	
				else {
					rootAiming[horizontalAimingEnabled] = false;
					horizontalAiming[directionsCount] = 4;
					horizontalAiming[angleStep] = 0.01;
				};
	
				requestAnimationFrame(objects.features?.weapon.aimBot);
			},
	
			teleportShells: function () {
				if (!objects?.features?.weapon?.clumsyEnabled) return;
	
				const params = objects.features.fly.options.params;
				let target_position = {
					x: Object.entries(objects.features.weapon.target)[0][1],
					y: Object.entries(objects.features.weapon.target)[1][1],
					z: Object.entries(objects.features.weapon.target)[2][1],
				};
	
				let vectors = [];
				for (let shell of objects.ObjectsKosto.validShells) {
					const ForNativeList = Object.entries(shell)[5][1],
						NativeList = Object.entries(ForNativeList)[0][1],
						Uniform = Object.entries(NativeList)[1][1],
						ShellVector = utils.getByName(Uniform, "Ot");
	
					vectors.push(ShellVector);
				};
	
				for (let vector of vectors) {
					vector[Object.keys(vector)[0]] = target_position.x;
					vector[Object.keys(vector)[1]] = target_position.y;
					vector[Object.keys(vector)[2]] = target_position.z;
				};
			},
		};
	
		RemoveMines = {
			isEnabled: false,
			process: function () {
				if (!objects.features) return;
				if (!utils.isGameReady) return;
	
				if (!objects.features.RemoveMines.isEnabled) return;
	
	
	
	
				const game = utils.findByPath(objects?.ObjectsKosto.world.world, "ArrayList_0.i:1.0");
				const arrayList = utils.findByPath(
					game,
					"i:3"
				)?.[1];
	
	
	
				arrayList?.forEach((e, index) => {
					if (!functions) functions = utils.findByPath(e, "i:0")?.[0];
	
					if (!functions) return;
	
					if (!array) array = utils.findByPath(e[functions], "i:0")?.[0];
	
					if (!array) return;
	
					if (e?.[functions]?.[array]) {
						for (const t of e[functions][array]) {
							if (!callBack) {
								callBack = utils.findByPath(t, "i:1")?.[0];
							}
	
							if (t[callBack]?.callableName === "removeMines") {
								const removeMines = arrayList[index + 5][functions][array][0][callBack];
								object = removeMines?.toString().split(".")[1].split(")")[0];
								return removeMines()
							}
						};
					};
				});
	
				requestAnimationFrame(objects.features?.RemoveMines.process);
			},
		};
	
		fly = {
			get killZones() {
				const killZones = utils.findByPath(objects.ObjectsKosto.gameMode, "i:0.i:8")[1];
				return {
					minX: Object.entries(killZones)[0][1],
					minY: Object.entries(killZones)[1][1],
					minZ: Object.entries(killZones)[2][1],
					maxX: Object.entries(killZones)[3][1],
					maxY: Object.entries(killZones)[4][1],
					maxZ: Object.entries(killZones)[5][1],
				};
			},
	
			speed: 120,
			isEnabled: false,
			freezeEnabled: false,
			antiAimEnabled: false,
	
			antiAim: function () {
				if (objects.features.fly.antiAimEnabled) requestAnimationFrame(objects.features.fly.antiAim);
	
				if (!objects.features) return;
				if (!utils.isGameReady) return;
	
				const TankPhysicsComponent = objects.ObjectsKosto.localTank.tankPhysics;
				const InterpolPosition = Object.entries(TankPhysicsComponent)[8][1];
	
				const Interpolatedz = utils.findByPath(InterpolPosition, 'i:2')[0],
					Interpolatedy = utils.findByPath(InterpolPosition, 'i:1')[0],
					Interpolatedx = utils.findByPath(InterpolPosition, 'i:0')[0];
	
				InterpolPosition[Interpolatedx] = utils.getRandom(objects.features.fly.killZones.minX, objects.features.fly.killZones.maxX);
				InterpolPosition[Interpolatedy] = utils.getRandom(objects.features.fly.killZones.minY, objects.features.fly.killZones.maxY);
				InterpolPosition[Interpolatedz] = utils.getRandom(objects.features.fly.killZones.maxZ, objects.features.fly.killZones.maxZ);
			},
	
			options: {
				get params() {
					if (!objects.features) return;
					if (!utils.isGameReady) return;
	
					const tankPhysics = objects.ObjectsKosto.localTank.tankPhysics;
					const Body = Object.entries(tankPhysics)[17][1];
					const BodyState = Object.entries(Body)[24][1];
					const Quaternion = Object.entries(BodyState)[1][1];
	
					return {
						TankPhysics: tankPhysics,
						Body: Body,
						BodyState: BodyState,
						Quaternion: Quaternion
					};
				},
	
				setMovable: function () {
					if (!objects.features) return;
					if (!utils.isGameReady) return;
	
					const TankArray = Object.entries(objects.features.fly.options.params.BodyState)[3][1],
						Body = objects.features.fly.options.params.Body;
	
					if (objects.features.fly.isEnabled == true) {
						Body[Object.keys(Body)[5]] = false;
					} else {
						Body[Object.keys(Body)[5]] = true;
					};
				},
	
				// freezeTanks 函数：用于冻结或解冻所有敌方坦克
				freezeTanks: function () {
					// 检查游戏特征对象是否存在
					if (!objects.features) return;
					// 检查游戏是否已准备好
					if (!utils.isGameReady) return;
	
					// 获取玩家列表
					const players = objects.ObjectsKosto?.players;
	
					// 遍历所有玩家
					for (const player of players) {
						// 获取玩家相关的敌方原生列表
						const ForEnemyNativeList = Object.entries(player)[5][1],
							EnemyNativeList = Object.entries(ForEnemyNativeList)[0][1],
							ForTankPhysics = utils.getByProto(EnemyNativeList, 'setPhysicsTransform', 7);
	
						// 获取坦克的物理身体
						const EnemyBody = Object.entries(ForTankPhysics)[17][1];
						// 获取设置玩家派系的原生方法
						const ForNick = utils.getByProto(EnemyNativeList, "setClan", 4);
	
						// 如果找不到设置派系的方法，则跳过当前循环
						if (ForNick == void 0) continue;
	
						// 获取玩家的昵称
						const Nick = Object.entries(ForNick)?.[4]?.[1];
	
						// 如果当前玩家的昵称与游戏内的用户名相同，则跳过当前循环
						if (Nick == objects.ObjectsKosto.userName) continue;
	
						// 根据是否启用冻结功能来设置坦克的物理身体状态
						if (objects.features.fly.freezeEnabled == true) {
							EnemyBody[Object.keys(EnemyBody)[5]] = false; // 设置为解冻状态
						} else {
							EnemyBody[Object.keys(EnemyBody)[5]] = true; // 设置为冻结状态
						};
					};
				},
	
				// quaternion 函数：用于处理四元数相关的操作
				quaternion: function () {
					// 检查游戏特征对象是否存在
					if (!objects.features) return;
					// 检查游戏是否已准备好
					if (!utils.isGameReady) return;
	
					// 如果飞行功能已启用，则使用 requestAnimationFrame 来周期性地调用 quaternion 函数
					if (objects.features.fly.isEnabled) requestAnimationFrame(objects.features.fly.options.quaternion);
					else return; // 如果飞行功能未启用，则直接返回
	
					// 获取四元数对象
					const Quaternion = objects.features.fly.options.params.Quaternion;
	
					// 将四元数的所有四个分量都设置为 0
					Quaternion[Object.keys(Quaternion)[0]] =
					Quaternion[Object.keys(Quaternion)[1]] =
					Quaternion[Object.keys(Quaternion)[2]] =
					Quaternion[Object.keys(Quaternion)[3]] = 0;
				},
	
				// 定义 orientation 函数，用于处理飞行状态的方向调整
					orientation: function () {
						// 如果 features 对象不存在，则直接返回并不执行后续代码
						if (!objects.features) return;
						// 如果游戏尚未准备好，则直接返回并不执行后续代码
						if (!utils.isGameReady) return;
	
						// 如果 features.fly.isEnabled 为 true，则使用 requestAnimationFrame 方法来在下一帧执行 features.fly.options.orientation 函数
						// 这通常用于更新飞行状态的方向或视角
						if (objects.features.fly.isEnabled) requestAnimationFrame(objects.features.fly.options.orientation);
						// 如果飞行状态未启用，则直接返回并不执行后续代码
						else return;
	
					// 从 objects.features.fly.options.params.BodyState 中获取第四个元素的第二个值，这应该是一个包含坦克状态信息的数组
					const TankArray = Object.entries(objects.features.fly.options.params.BodyState)[3][1];
					// 从 objects.features.fly.options.params 中获取 Body 对象，它可能包含了坦克的主要属性或状态
					const Body = objects.features.fly.options.params.Body;
	
					// 检查是否按下了键码为 65 的键（通常是 'A' 键），并且聊天窗口没有打开，同时坦克的 x 坐标大于最小击杀区域的 x 坐标
					if (KeyPressing.isKeyPressed(65) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[0]] > objects.features.fly.killZones.minX) {
						// 如果满足上述条件，则减少坦克的 x 坐标，模拟坦克向左移动的效果，移动速度由 features.fly.speed 定义
						TankArray[Object.keys(TankArray)[0]] -= objects.features.fly.speed;
					}
	
					// 检查是否按下了键码为 68 的键（通常是 'D' 键），并且聊天窗口没有打开，同时坦克的 x 坐标小于最大击杀区域的 x 坐标
					if (KeyPressing.isKeyPressed(68) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[0]] < objects.features.fly.killZones.maxX) {
						// 如果满足上述条件，则增加坦克的 x 坐标，模拟坦克向右移动的效果，移动速度由 features.fly.speed 定义
						TankArray[Object.keys(TankArray)[0]] += objects.features.fly.speed;
					}
	
					// 如果按下键码为 87 的键（通常是 'W' 键），聊天窗口没有打开，并且坦克的 y 坐标小于最大击杀区域的 y 坐标
					if (KeyPressing.isKeyPressed(87) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[1]] < objects.features.fly.killZones.maxY) {
						// 增加坦克的 y 坐标，模拟坦克向前移动的效果，移动速度由 features.fly.speed 定义
						TankArray[Object.keys(TankArray)[1]] += objects.features.fly.speed;
					}
	
					// 如果按下键码为 83 的键（通常是 'S' 键），聊天窗口没有打开，并且坦克的 y 坐标大于最小击杀区域的 y 坐标
					if (KeyPressing.isKeyPressed(83) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[1]] > objects.features.fly.killZones.minY) {
						// 减少坦克的 y 坐标，模拟坦克向后移动的效果，移动速度由 features.fly.speed 定义
						TankArray[Object.keys(TankArray)[1]] -= objects.features.fly.speed;
					}
	
					// 如果按下键码为 81 的键（通常是 'Q' 键），聊天窗口没有打开，并且坦克的 z 坐标小于最大击杀区域的 z 坐标
					if (KeyPressing.isKeyPressed(81) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[2]] < objects.features.fly.killZones.maxZ) {
						// 增加坦克的 z 坐标，模拟坦克向上移动的效果，移动速度由 features.fly.speed 定义
						TankArray[Object.keys(TankArray)[2]] += objects.features.fly.speed;
					}
	
					// 如果按下键码为 69 的键（通常是 'E' 键），聊天窗口没有打开，并且坦克的 z 坐标大于最小击杀区域的 z 坐标
					if (KeyPressing.isKeyPressed(69) && utils.isChatOpen == false && TankArray[Object.keys(TankArray)[2]] > objects.features.fly.killZones.minZ) {
						// 减少坦克的 z 坐标，模拟坦克向下移动的效果，移动速度由 features.fly.speed 定义
						TankArray[Object.keys(TankArray)[2]] -= objects.features.fly.speed;
					}
	
					// 如果按下键码为 70 的键（注释中提到的 'А'），聊天窗口没有打开，并且飞行速度大于等于 1
					if (KeyPressing.isKeyPressed(70/* А */) && utils.isChatOpen == false && objects.features.fly.speed >= 1) {
						// 减少飞行速度，模拟坦克减速的效果
						objects.features.fly.speed -= 1;
					}
	
					// 如果按下键码为 86 的键（注释中提到的 'М'），聊天窗口没有打开，并且飞行速度小于等于 400
					if (KeyPressing.isKeyPressed(86/* М */) && utils.isChatOpen == false && objects.features.fly.speed <= 400) {
						// 增加飞行速度，模拟坦克加速的效果
						objects.features.fly.speed += 1;
					}
				}
			}
		};
	
	// 初始化 effectsEnabled 变量，默认为 false，表示效果功能未启用
	effectsEnabled = false;
	
	// 定义 effects 函数，用于处理游戏内的效果逻辑
	effects = () => {
		// 检查 features 对象是否存在
		if (!objects.features) return;
		// 检查游戏是否已准备好
		if (!utils.isGameReady) return;
	
		// 如果 features 中的 effectsEnabled 为 true，则使用 requestAnimationFrame 方法来在下一帧执行 features.effects 函数
		if (objects.features.effectsEnabled) requestAnimationFrame(objects.features.effects);
		// 如果 effectsEnabled 为 false，则直接返回，不做任何操作
		else return;
	
		// 定义一个 getMyPosition 函数，用于获取坦克的位置信息
		const getMyPosition = function () {
			// 从 objects.features.fly.options.params.BodyState 中获取第四个元素的第二个值（索引为 3 的元素对应的值），该值应该是一个包含坦克位置信息的对象
			const TankArray = Object.entries(objects.features.fly.options.params.BodyState)[3][1];
			// 返回一个包含 x 和 y 坐标的对象
			return {
				x: TankArray[Object.keys(TankArray)[0]], // x 坐标为 TankArray 的第一个键对应的值
				y: TankArray[Object.keys(TankArray)[1]]  // y 坐标为 TankArray 的第二个键对应的值
			};
		};
	
		// 检查 validShells 数组（表示有效的炮弹）长度是否大于 0
		if (objects.ObjectsKosto.validShells.length > 0) {
			// 初始化一个空的 vectors 数组，用于存储炮弹的向量信息
			let vectors = [];
			// 遍历 validShells 数组中的每个炮弹对象
			for (let shell of objects.ObjectsKosto.validShells) {
				// 从 shell 对象中获取 ForNativeList 属性值
				const ForNativeList = Object.entries(shell)[5][1],
					// 从 ForNativeList 中获取 NativeList 属性值
					NativeList = Object.entries(ForNativeList)[0][1],
					// 从 NativeList 中获取 Uniform 属性值
					Uniform = Object.entries(NativeList)[1][1],
					// 从 Uniform 中获取名为 "Ot" 的属性值，这应该是一个表示炮弹向量的对象
					ShellVector = utils.getByName(Uniform, "Ot");
	
				// 将炮弹向量添加到 vectors 数组中
				vectors.push(ShellVector);
			};
	
			// 遍历 vectors 数组中的每个炮弹向量
			for (let vector of vectors) {
				// 更新炮弹向量的 x 坐标为坦克的 x 位置
				vector[Object.keys(vector)[0]] = getMyPosition().x;
				// 更新炮弹向量的 y 坐标为坦克的 y 位置
				vector[Object.keys(vector)[1]] = getMyPosition().y;
				// 将炮弹向量的第三个值设置为 65535（可能是一个特定的标识符或最大值）
				vector[Object.keys(vector)[2]] = 65535;
			};
		};
	};
	
		// 定义一个名为autoShoot的函数
		autoShoot = () => {
		// 如果游戏还未准备好，直接返回
		if (!utils.isGameReady) return;
		// 如果对象中的features属性不存在，直接返回
		if (!objects.features) return;
	
		// 尝试从localTank的components中找到武器触发器组件
		const weapon = utils.getByProto(objects.ObjectsKosto?.localTank.components, 'weaponTrigger', 3),
			// 从武器触发器组件中找到触发路径
			trigger = utils.findByPath(weapon, 'i:5')?.[1];
	
		// 如果没有找到武器或触发器，直接返回
		if (!(weapon || trigger)) return;
	
		// 从触发器中找到释放和一次命中属性
		const release = utils.findByPath(trigger, 'i:5')?.[0], // press
			one = utils.findByPath(trigger, 'i:6')?.[0]; // onehit
	
		// 如果没有找到释放或一次命中属性，直接返回
		if (!(release || one)) return;
	
		// 如果features中的autoShootEnabled为true
		if (objects.features?.autoShootEnabled) {
			// 设置一个定时器，每隔一段时间执行一次
			objects.features.autoShootInterval = setInterval(() => {
				// 将触发器的释放和一次命中属性设置为true，触发射击
				trigger[one] =
					trigger[release] = true;
	
				// 获取有效炮弹数组
				const Shells = objects.ObjectsKosto?.validShells;
				// 如果炮弹数组存在且长度大于等于20
				if (Shells && Shells?.length >= 20) {
					// 调用teleportShells方法，可能是将炮弹传送或重新生成到某个位置
					objects.features.weapon.teleportShells();
				};
			});
		}
		// 如果features中的autoShootEnabled为false
		else {
			// 将触发器的释放和一次命中属性设置为false，停止射击
			trigger[one] =
				trigger[release] = false;
	
			// 清除之前设置的定时器
			clearInterval(objects.features.autoShootInterval);
			// 将autoShootInterval设置为null，表示没有定时器在运行
			objects.features.autoShootInterval = null;
		};
	};
	
		// 初始化变量 fovEnabled，默认为 false，表示视野（Field of View, FOV）功能未启用
	fovEnabled = false;
	
	// 定义 fov 函数，用于调整游戏视野（FOV）值
	fov = function () {
		// 检查游戏是否已准备好
		if (!utils.isGameReady) return;
		// 使用 requestAnimationFrame 方法来在下一帧执行 objects.features?.fov 函数
		requestAnimationFrame(objects.features?.fov);
	
		let fovValue;
	
		// 如果视野功能已启用，则从页面上获取视野值
		if (objects.features?.fovEnabled) {
			fovValue = document.querySelector('#fovValueState').value;
		} else {
			// 如果视野功能未启用，则使用默认的视野值 1.0471976
			fovValue = 1.0471976;
		}
	
		// 查找并获取游戏内用于跟随坦克的摄像机组件
		const followCamera = utils.getByProto(objects.ObjectsKosto?.localTank?.components, 'onSpawnCameraTransformQuery', 7),
			// 从跟随摄像机的组件中获取摄像机对象
			camera = utils.findByPath(followCamera, 'i:24')?.[1],
			// 从摄像机对象中获取用于更新摄像机状态的函数
			update = utils.findByPath(camera, '__proto__.i:1')?.[0];
	
		// 如果摄像机或更新函数不存在，则直接返回，不做任何操作
		if (!(camera || update)) return;
	
		// 如果 camera 对象没有 copy 方法，则创建一个指向原始更新函数的 copy 方法
		!camera.copy && (camera.copy = camera[update]);
	
		let fovName = '';
		// 重写摄像机的更新函数，以便在每次更新时设置新的视野值
		camera[update] = function (t) {
			// 如果 fovName 还未被赋值，则通过查找获取视野属性的名称
			if (!fovName) fovName = utils.findByPath(t, 'i:0')?.[0];
	
			// 调用原始的更新函数，保持摄像机的其他设置不变
			this.copy(t);
			// 设置新的视野值
			t[fovName] = fovValue;
		}
	}
		// 1.0471976
	};
	// 声明一个 objects 对象，用于存储游戏或应用的相关数据
	let objects = {
		// ObjectsKosto 属性被初始化为 undefined，可能用于存储游戏的一些核心数据或状态
		ObjectsKosto: void 0,
		// features 属性也被初始化为 undefined，可能用于存储游戏的功能或特性
		features: void 0
	};
	
	// 初始化帮助函数
	function initHelpers() {
		// 检查是否存在 ObjectsKosto 对象
		if (!objects.ObjectsKosto) return;
		// 检查游戏是否已准备好
		if (!utils.isGameReady) return;
	
		// 获取 mines 元素的子元素 span，并设置其文本内容为 ObjectsKosto 中 mines 数组的长度
		// 这里使用了可选链操作符(?.)来安全地访问嵌套对象属性
		document.querySelector('.mines > span').innerText = objects?.ObjectsKosto?.mines?.length;
	
		// 检查是否存在武器功能，并且 clumsyEnabled 属性为 true
		if (objects.features?.weapon?.clumsyEnabled) {
			// 如果满足条件，则获取 id 为 'shellsCount' 的元素，并设置其文本内容为 ObjectsKosto 中 validShells 数组的长度
			document.querySelector('#shellsCount').innerText = objects?.ObjectsKosto?.validShells?.length;
		};
	}
	
	setInterval(initHelpers, 1000);
	const utils = new Utils();
	setInterval(utils.getPlayerNick, 0);
	// 定义一个空字符串变量，用于存储目标昵称
	let targetNick = '';
	// 定义一个名为 initObjects 的函数
	function initObjects() {
	
		// 使用 if 语句检查两个条件是否都满足：
		// 1. utils.isGameReady 是否为真，这通常意味着游戏是否已经准备好进行初始化。
		// 2. objects.ObjectsKosto 或 objects.features 是否尚未定义（即它们是 undefined）。
		if (utils.isGameReady && (objects.ObjectsKosto == void 0 || objects.features == void 0)) {
			
			// 如果条件满足，创建一个新的 ObjectsKosto 对象并将其赋值给 objects.ObjectsKosto。
			enter  = true;
			objects.ObjectsKosto = new ObjectsKosto();
			console.log("USER: "+objects.ObjectsKosto.userName)
			document.querySelector("body > div.shizoval_content > center > h1").textContent = "[Kosto]Shizoval For " + objects.ObjectsKosto.userName 
	
			console.log("Battle: "+objects.ObjectsKosto.user.opa_1.wps_1+". Mode: "+objects.ObjectsKosto.user.opa_1.spt_1)
			// 同样地，创建一个新的 Features 对象并将其赋值给 objects.features。
			objects.features = new Features();
	
			// 将新创建的 ObjectsKosto 对象和 Features 对象分别赋值给 unsafeWindow.ObjectsKosto 和 unsafeWindow.Features。
			// unsafeWindow 通常用于在浏览器扩展或内容脚本中访问页面上的全局变量和函数。
			// 这里可能是为了在其他部分的代码或外部脚本中能够访问到这两个新创建的对象。
			unsafeWindow.ObjectsKosto = objects.ObjectsKosto;
			unsafeWindow.Features = objects.features;
			unsafeWindow.utils = utils
		};
	
		// 使用 requestAnimationFrame 方法来请求浏览器在下一次重绘之前调用指定的函数（这里是 initObjects 函数）。
		// 这样做的好处是可以使动画更加平滑，并且能够让浏览器更有效地处理渲染任务。
		// 同时，这也确保了 initObjects 函数会在下一次浏览器重绘之前再次被调用，从而实现了一个递归循环，确保初始化代码能够在游戏需要时多次执行。
		requestAnimationFrame(initObjects);
	};
	let enter = false;
	// 在定义完 initObjects 函数后，立即调用它，开始初始化过程。
	requestAnimationFrame(initObjects);
	
	// 定义一个名为 FOV 的函数
	const FOV = () => {
	
		// 如果 objects.features 不存在或未定义，则函数直接返回，不执行后续操作
		if (!objects.features) return;
	
		// 如果 utils.isGameReady 为 false，则函数直接返回，不执行后续操作
		// 这可能是为了确保游戏或应用已经准备好再执行 FOV 的相关操作
		if (!utils.isGameReady) return;
	
		// 获取页面中 id 为 'fovState' 的元素（可能是一个复选框），并检查其是否被选中
		// 如果被选中，objects.features.fovEnabled 将被设置为 true，否则为 false
		objects.features.fovEnabled = document.querySelector('#fovState').checked;
	
		// 使用 requestAnimationFrame 方法来调用 objects.features.fov 函数
		// requestAnimationFrame 用于在下一次重绘之前调用指定的函数，使得动画更加流畅
		// 这里的 '?' 是可选链操作符，如果 objects.features 不存在或 fov 属性不存在，则不会执行任何操作
		requestAnimationFrame(objects.features?.fov);
	};
	// 定义一个名为RemoveMines的函数
	const RemoveMines = () => {
	
		// 检查objects对象是否包含features属性，如果不包含则直接返回，不执行后续代码
		if (!objects.features) return;
	
		// 检查utils对象是否包含isGameReady属性，并且其值是否为真，如果不是则直接返回，不执行后续代码
		if (!utils.isGameReady) return;
	
		// 通过查询文档（通常是HTML文档）中ID为'RemoveMinesState'的元素，检查其checked属性（通常是一个复选框），
		// 并将结果赋值给objects.features.RemoveMines.isEnabled。这意味着根据用户的选择来启用或禁用“移除地雷”功能。
		objects.features.RemoveMines.isEnabled = document.querySelector('#RemoveMinesState').checked;
	
		// 使用requestAnimationFrame方法来调用objects.features.RemoveMines.process函数。
		// requestAnimationFrame是浏览器提供的一个方法，用于在下一次重绘之前调用指定的函数，
		// 这通常用于实现平滑的动画效果。如果objects.features.RemoveMines.process存在，则调用它。
		requestAnimationFrame(objects.features?.RemoveMines.process);
	};
	
	// flyHack函数：用于切换飞行模式的开关状态
	const flyHack = () => {
		// 检查是否存在游戏功能对象
		if (!objects.features) return;
		// 检查游戏是否已准备好
		if (!utils.isGameReady) return;
	
		// 切换飞行模式的启用状态
		objects.features.fly.isEnabled = !objects.features.fly.isEnabled;
		// 更新页面上飞行模式开关的状态
		document.querySelector('#flyHackState').checked = objects.features.fly.isEnabled;
	
		// 请求动画帧来更新玩家的四元数（用于3D旋转）
		requestAnimationFrame(objects.features.fly.options.quaternion);
		// 请求动画帧来设置玩家的移动能力
		requestAnimationFrame(objects.features.fly.options.setMovable);
		// 请求动画帧来更新玩家的方向
		requestAnimationFrame(objects.features.fly.options.orientation);
	};
	
	// freezeTanks函数：用于启用或禁用冻结坦克的功能
	const freezeTanks = () => {
		// 检查是否存在游戏功能对象
		if (!objects.features) return;
		// 检查游戏是否已准备好
		if (!utils.isGameReady) return;
	
		// 根据页面上冻结状态开关的选中状态来设置冻结坦克的启用状态
		objects.features.fly.freezeEnabled = document.querySelector('#freezeState').checked;
	
		// 请求动画帧来执行冻结坦克的操作
		requestAnimationFrame(objects.features.fly.options.freezeTanks);
	};
	
	// AA函数：用于切换反瞄准功能的开关状态
	const AA = () => {
		// 检查是否存在游戏功能对象
		if (!objects.features) return;
		// 检查游戏是否已准备好
		if (!utils.isGameReady) return;
	
		// 切换反瞄准功能的启用状态
		objects.features.fly.antiAimEnabled = !objects.features.fly.antiAimEnabled;
		// 更新页面上反瞄准开关的状态
		document.querySelector('#antiAimState').checked = objects.features.fly.antiAimEnabled;
	
		// 请求动画帧来执行反瞄准的操作
		requestAnimationFrame(objects.features.fly.antiAim);
	};
	
	const Clumsy = () => {
		if (!objects.features) return;
		if (!utils.isGameReady) return;
	
		objects.features.weapon.clumsyEnabled = document.querySelector('#clumsyState').checked;
		requestAnimationFrame(objects.features.weapon.setSpeed);
	
		document.addEventListener('keydown', event => {
			if (utils.isChatOpen) return;
			if (event.keyCode == 82) objects.features.weapon.teleportShells();
		});
	};
	
	// 瞄准辅助函数
	const AimBot = () => {
		// 如果没有游戏特性，则返回
		if (!objects.features) return;
		// 如果游戏没有准备好，则返回
		if (!utils.isGameReady) return;
	
		// 获取页面上的瞄准辅助状态（开启或关闭）
		objects.features.weapon.aimBotEnabled = document.querySelector('#aimBotState').checked;
		// 在下一帧执行瞄准辅助函数
		requestAnimationFrame(objects.features.weapon.aimBot);
	};
	
	// 效果开关函数
	const effects = () => {
		// 如果没有游戏特性，则返回
		if (!objects.features) return;
		// 如果游戏没有准备好，则返回
		if (!utils.isGameReady) return;
	
		// 切换效果开关状态
		objects.features.effectsEnabled = !objects.features.effectsEnabled;
		// 更新页面上的效果开关状态
		document.querySelector('#effectsState').checked = objects.features.effectsEnabled;
	
		// 在下一帧执行效果函数
		requestAnimationFrame(objects.features.effects);
	};
	
	// 自动射击函数
	const autoShoot = () => {
		// 如果没有游戏特性，则返回
		if (!objects.features) return;
		// 如果游戏没有准备好，则返回
		if (!utils.isGameReady) return;
	
		// 获取页面上的自动射击状态（开启或关闭）
		objects.features.autoShootEnabled = document.querySelector('#autoShotState').checked;
		// 在下一帧执行自动射击函数
		requestAnimationFrame(objects.features.autoShoot);
		// 发送某种追踪事件，可能是用于分析或统计
		tc('Kosto-Shizoval','autoshoot-root is enable')
	};
	
	// 为各个状态元素添加点击事件监听器
	document.querySelector('#clumsyState').addEventListener('click', Clumsy);
	document.querySelector('#flyHackState').addEventListener('click', flyHack);
	document.querySelector('#antiAimState').addEventListener('click', AA);
	document.querySelector('#freezeState').addEventListener('click', freezeTanks);
	document.querySelector('#aimBotState').addEventListener('click', AimBot);
	document.querySelector('#RemoveMinesState').addEventListener('click', RemoveMines);
	document.querySelector('#effectsState').addEventListener('click', effects);
	document.querySelector('#autoShotState').addEventListener('click', autoShoot);
	document.querySelector('#fovState').addEventListener('click', FOV);
	
	// 更新速度滑块的值
	setInterval(function () {
		// 如果没有游戏特性，则返回
		if (!objects.features) return;
		// 如果游戏没有准备好，则返回
		if (!utils.isGameReady) return;
		// 如果没有找到指定的速度滑块元素，则返回
		if (!document.querySelector(".shizoval_content > div.fly > input[type=range]:nth-child(3)")) return;
	
		// 更新速度滑块的值，使其与游戏内的速度值一致
		document.querySelector(".shizoval_content > div.fly > input[type=range]:nth-child(3)").value = objects.features.fly.speed;
	}, 10); // 每10毫秒执行一次这个更新函数
	
	// 当按下键盘上的任意键时，触发事件监听器
	document.addEventListener('keydown', event => {
		// 如果聊天窗口已经打开，则不执行后续操作
		if (utils.isChatOpen) return;
	
		// 检查是否按下了Shift键（键码为16）并且是在浏览器窗口中按下（event.location == 2）
		// 如果是，则执行flyHack函数，可能是开启飞行作弊功能
		if (event.keyCode == 16 && event.location == 2) flyHack();
		// 检查是否按下了减号键（键码为45）、数字小键盘的减号键（键码为96）或者除号键（键码为191）
		// 如果是，则根据菜单当前的显示状态来决定是显示还是隐藏菜单
		else if (event.keyCode == 45 || event.keyCode == 96 || event.keyCode == 191&&enter!==false) 
			menu.style.display == 'block' ? menu.style.display = 'none' : menu.style.display = 'block';
			
	});
