import Vue from 'vue'
import {Message} from 'element-ui'
import {MessageBox} from 'element-ui'
import { Button ,Container,Header,Aside,Main,Row,Col,Menu,menuItemGroup,Submenu,menuItem,
    Divider,
    Tabs,
    tabPane,
    Tag,
    datePicker,
    Progress,
    Carousel,
    carouselItem,
    Form,
    FormItem,
    Input,
    Card,
    Table,
    tableColumn,
    Pagination,
    Select,
    Option,
    Cascader
} from 'element-ui'
Vue.use(Cascader);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(menuItemGroup);
Vue.use(Submenu);
Vue.use(menuItem);
Vue.use(Divider);
Vue.use(Tabs);
Vue.use(tabPane);
Vue.use(datePicker);
Vue.use(Tag);
Vue.use(Progress);
Vue.use(Carousel);
Vue.use(carouselItem);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Input);
Vue.use(Card);
Vue.use(Table);
Vue.use(tableColumn);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(Table);
Vue.use(Table);Vue.use(Table);
Vue.use(Table);

Vue.prototype.$message=Message
Vue.prototype.$confirm= MessageBox.confirm
