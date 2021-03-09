import {ToaComponent} from '@core/ToaComponent';


export class Header extends ToaComponent {
    static className = 'header'

    toHTML() {
        return `
            <div class="theme-picker">
                <nav>
                    <div class="theme-picker__button" onclick="showThemePicker()">
                        <div class="title">Выбор темы</div>
                        <span class="material-icons">expand_more</span>
                    </div>

                    <ul id="theme-picker__menu">

                        <li>
                            <a href="" class="main-li-a">Системы счисления (кр)</a>
                        </li>

                        <li>
                            <a href="" class="main-li-a">Логические основы цифровых автоматов (кр)</a>
                        </li>

                        <li>
                            <a href="" class="main-li-a">Арифметические основы цифровых автоматов (кр)</a>
                        </li>

                        <li>
                            <a href="" class="main-li-a">Абстрактные автоматы (кп)</a>
                        </li>

                        <li>
                            <a href="" class="main-li-a">Структурные автоматы (кп)</a>
                        </li>

                        <li>
                            <a href="" class="main-li-a">Микропрограммные автоматы (кп)</a>
                        </li>

                        <li>
                            <a href="" class="main-li-a">Учебный стенд «Altera DE 2-115» и средства автоматизации
                                проектирования
                                (тестирование)</a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div class="user">
                <div class="user__settings">
                    <span class="material-icons md-18">settings</span>
                </div>
                <div class="user__name">Имя Фамилия</div>
                <div class="user__avatar">
                    <span class="material-icons md-24">account_circle</span>
                </div>
            </div>
        `
    }
}