"use strict";(self.webpackChunk_wcAdmin_webpackJsonp=self.webpackChunk_wcAdmin_webpackJsonp||[]).push([[8597],{64793:function(e,t,r){var a=r(69307),o=r(70444);const s=(0,a.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(o.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}));t.Z=s},15860:function(e,t,r){r.r(t),r.d(t,{StoreAlerts:function(){return C},default:function(){return y}});var a=r(69307),o=r(65736),s=r(55609),n=r(83849),l=r.n(n),i=r(78674),c=r(94333),m=r(9818),d=r(76292),u=r.n(d),p=r(62907),h=r(78810),_=r(64793),g=r(67221),E=r(14599),w=r(14812),v=r(32490),N=r(7862),A=r.n(N);class x extends a.Component{render(){const{hasMultipleAlerts:e}=this.props;return(0,a.createElement)(s.Card,{className:"woocommerce-store-alerts is-loading","aria-hidden":!0,size:null},(0,a.createElement)(s.CardHeader,{isBorderless:!0},(0,a.createElement)("span",{className:"is-placeholder"}),e&&(0,a.createElement)("span",{className:"is-placeholder"})),(0,a.createElement)(s.CardBody,null,(0,a.createElement)("div",{className:"woocommerce-store-alerts__message"},(0,a.createElement)("span",{className:"is-placeholder"}),(0,a.createElement)("span",{className:"is-placeholder"}))),(0,a.createElement)(s.CardFooter,{isBorderless:!0},(0,a.createElement)("span",{className:"is-placeholder"})))}}var b=x;x.propTypes={hasMultipleAlerts:A().bool},x.defaultProps={hasMultipleAlerts:!1};var S=r(79205);class C extends a.Component{constructor(e){super(e),this.state={currentIndex:0},this.previousAlert=this.previousAlert.bind(this),this.nextAlert=this.nextAlert.bind(this)}previousAlert(e){e.stopPropagation();const{currentIndex:t}=this.state;t>0&&this.setState({currentIndex:t-1})}nextAlert(e){e.stopPropagation();const t=this.getAlerts(),{currentIndex:r}=this.state;r<t.length-1&&this.setState({currentIndex:r+1})}renderActions(e){const{triggerNoteAction:t,updateNote:r}=this.props,n=e.actions.map((r=>(0,a.createElement)(s.Button,{key:r.name,isPrimary:r.primary,isSecondary:!r.primary,href:r.url||void 0,onClick:()=>t(e.id,r.id)},r.label))),l=[{value:u()().add(4,"hours").unix().toString(),label:(0,o.__)("Later Today","woocommerce")},{value:u()().add(1,"day").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:(0,o.__)("Tomorrow","woocommerce")},{value:u()().add(1,"week").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:(0,o.__)("Next Week","woocommerce")},{value:u()().add(1,"month").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:(0,o.__)("Next Month","woocommerce")}],i=e.is_snoozable&&(0,a.createElement)(s.SelectControl,{className:"woocommerce-store-alerts__snooze",options:[{label:(0,o.__)("Remind Me Later","woocommerce"),value:"0"},...l],onChange:t=>{if("0"===t)return;const a=l.find((e=>e.value===t));(t=>{r(e.id,{status:"snoozed",date_reminder:t.value});const a={alert_name:e.name,alert_title:e.title,snooze_duration:t.value,snooze_label:t.label};(0,E.recordEvent)("store_alert_snooze",a)})({value:t,label:a&&a.label})}});if(n||i)return(0,a.createElement)("div",{className:"woocommerce-store-alerts__actions"},n,i)}getAlerts(){return(this.props.alerts||[]).filter((e=>"unactioned"===e.status))}render(){const e=this.getAlerts(),t=(0,S.O3)("alertCount",0,(e=>parseInt(e,10)));if(t>0&&this.props.isLoading)return(0,a.createElement)(b,{hasMultipleAlerts:t>1});if(0===e.length)return null;const{currentIndex:r}=this.state,n=e.length,c=e[r],m=c.type,d=l()("woocommerce-store-alerts",{"is-alert-error":"error"===m,"is-alert-update":"update"===m});return(0,a.createElement)(s.Card,{className:d,size:null},(0,a.createElement)(s.CardHeader,{isBorderless:!0},(0,a.createElement)(w.Text,{variant:"title.medium",as:"h2",size:"24",lineHeight:"32px"},c.title),n>1&&(0,a.createElement)("div",{className:"woocommerce-store-alerts__pagination"},(0,a.createElement)(s.Button,{onClick:this.previousAlert,disabled:0===r,label:(0,o.__)("Previous Alert","woocommerce")},(0,a.createElement)(p.Z,{icon:h.Z,className:"arrow-left-icon"})),(0,a.createElement)("span",{className:"woocommerce-store-alerts__pagination-label",role:"status","aria-live":"polite"},(0,i.Z)({mixedString:(0,o.__)("{{current /}} of {{total /}}","woocommerce"),components:{current:(0,a.createElement)(a.Fragment,null,r+1),total:(0,a.createElement)(a.Fragment,null,n)}})),(0,a.createElement)(s.Button,{onClick:this.nextAlert,disabled:n-1===r,label:(0,o.__)("Next Alert","woocommerce")},(0,a.createElement)(p.Z,{icon:_.Z,className:"arrow-right-icon"})))),(0,a.createElement)(s.CardBody,null,(0,a.createElement)("div",{className:"woocommerce-store-alerts__message",dangerouslySetInnerHTML:(0,v.ZP)(c.content)})),(0,a.createElement)(s.CardFooter,{isBorderless:!0},this.renderActions(c)))}}const f={page:1,per_page:g.QUERY_DEFAULTS.pageSize,type:"error,update",status:"unactioned"};var y=(0,c.compose)((0,m.withSelect)((e=>{const{getNotes:t,isResolving:r}=e(g.NOTES_STORE_NAME);return{alerts:t(f),isLoading:r("getNotes",[f])}})),(0,m.withDispatch)((e=>{const{triggerNoteAction:t,updateNote:r}=e(g.NOTES_STORE_NAME);return{triggerNoteAction:t,updateNote:r}})))(C)}}]);