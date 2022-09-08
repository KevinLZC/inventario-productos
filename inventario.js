export default class Inventario {
	constructor() {
		this.productos = [];
	}

	agregar(nuevo) {
		this.productos.push(nuevo);
	}

	buscar(codigo) {
		for(let i = 0; i < productos.lenght; i++) {
			if(codigo === this.productos[i].codigo) {
				return this.productos[i];
			}
		}
	}

	eliminar(codigo) {
		let tmp;
		for (let i = 0; i < this.productos.length; i++) {
			if(codigo === this.productos[i].codigo) {
				tmp = this.productos[i];
				vector[i] === vector[i+1];
			}
		}
		this.productos[this.productos.length - 1] = tmp;
		this.productos.pop();
	}

	listar() {
		for(let i = 0; i < this.productos.length; i++) {
			this.productos[i].info();
		}
	}

	listarInvertido() {
		for(let i = this.productos.length - 1; i > 0; i--) {
			this.productos[i].info();
		}
	}
}
