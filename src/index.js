import './scss/index.scss'
import {Toa} from '@/components/toa/Toa';
import {Header} from '@/components/header/Header';
import {Content} from '@/components/content/Content';


const toa = new Toa('#app', {
    components: [Header, Content]
})

console.log(toa.render())