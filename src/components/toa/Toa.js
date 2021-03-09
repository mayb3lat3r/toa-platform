export class Toa {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = document.createElement('div') // создаем дiv
        $root.classList.add('toa')

        // бежим по всему массиву из компонент, отрисовывая их
        this.components.forEach(Component => {
            const $el = document.createElement('div')
            $el.classList.add(Component.className)
            const component = new Component($el)
            $el.innerHTML = component.toHTML()
            $root.append($el)
        })
        return $root
    }

    render() {
        this.$el.append(this.getRoot())
    }
}