(function(global){
	var GridArut = {
		className: "u-gridarut",
		watchClass: "watch",
		states: {
			unbound: 1,
			bound: 0
		},
		Cell: {
			unboundClassName: "u-cell",
			boundClassName: "u-cell-bound"
		},
		list: {},
		getId: function(id) {
			return this.className + "-" + id;
		},
		switchState: function(i) {
			var id = this.getId(i);
			this.list[id].state = 1 - this.list[id].state;
		},
		setState: function(i, state) {
			this.list[this.getId(i)].state = state;
		},
		getState: function(i) {
			return this.list[this.getId(i)].state;
		},
		init: function(i) {
			var id = this.getId(i);
			this.list[id] = {
				state: undefined
			};
			this.setState(i, this.states.unbound);
		},
		bound: function(el) {
			for (var i = 0, n = el.children.length; i < n; i++) {
				var e = el.children[i];
				if (e.classList.contains(this.Cell.unboundClassName)) {
					e.classList.remove(this.Cell.unboundClassName);
					e.classList.add(this.Cell.boundClassName);
					this.bound(e);
				}
			}
		},
		unbound: function(el) {
			for (var i = 0, n = el.children.length; i < n; i++) {
				var e = el.children[i];
				if (e.classList.contains(this.Cell.boundClassName)) {
					e.classList.remove(this.Cell.boundClassName);
					e.classList.add(this.Cell.unboundClassName);
					this.unbound(e);
				}
			}
		}
	};
	
	window.onload = function() {
		var gridList = document.getElementsByClassName(GridArut.watchClass);
		for (var i = 0, n = gridList.length; i < n; i++) {
			var grid = gridList[i];
			GridArut.init(i);
			if (grid.clientWidth <= grid.dataset.bound) {
				GridArut.bound(grid);
				GridArut.setState(i, GridArut.states.bound);
			}
		}
	};
	
	window.onresize = function() {
		var gridList = document.getElementsByClassName(GridArut.watchClass);
		for (var i = 0, n = gridList.length; i < n; i++) {
			var grid = gridList[i];
			if (grid.clientWidth <= grid.dataset.bound) {
				if (GridArut.getState(i) === GridArut.states.unbound) {
					GridArut.bound(grid);
					GridArut.switchState(i);
				}
			} else {
				if (GridArut.getState(i) === GridArut.states.bound) {
					GridArut.unbound(grid);
					GridArut.switchState(i);
				}
			}
		}
	};
})(window);