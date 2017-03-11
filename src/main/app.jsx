import '../template/inspinia/css/bootstrap.min.css'
import '../template/inspinia/font-awesome/css/font-awesome.css'
import '../template/inspinia/css/plugins/toastr/toastr.min.css'
import '../template/inspinia/js/plugins/gritter/jquery.gritter.css'
import '../template/inspinia/css/animate.css'
import '../template/inspinia/css/style.css'
import '../template/custom.css'
import pt from 'modules/react-intl/locale-data/pt.js'
// App
import React from 'react'
import ReactIntl, {addLocaleData} from 'react-intl';
import Routes from './routes'
import Menu from '../template/menu'
import Footer from '../template/footer'

addLocaleData([...pt])

export default props => (
    <div id="page-wrapper" className="gray-bg">
        <Menu />
        <Routes />
        <Footer />
    </div>
)