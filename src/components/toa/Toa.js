export class Toa {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = document.createElement('div') // создаем дiv
        // бежим по всему массиву из компонент, отрисовывая их
        this.components.forEach(Component => {
            const component = new Component()
            $root.insertAdjacentHTML('beforeend', component.toHTML())
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())
    }
}