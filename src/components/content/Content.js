import {ToaComponent} from '@core/ToaComponent';


export class Content extends ToaComponent {
    toHTML() {
        return `
        <div class="content">

            <h1>Добро пожаловать!</h1>
            <h4>Это тестовая версия сайта.</h4>
            Возможно, скоро здесь будет главная страница, но не сегодня

        </div>
        `
    }
}