(this["webpackJsonpmodern-flappy-bee"]=this["webpackJsonpmodern-flappy-bee"]||[]).push([[0],{30:function(e,t,n){e.exports=n(58)},32:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(3),o=(n(32),n(0)),s=n(13),d=n.n(s),h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=e.x*n,a=e.y*n,r=t[0],o=t[0]+t[2],s=t[1],d=t[1]+t[3];return!(i<r||i>o||a<s||a>d)},c=function(e,t){var n=t.width,i=t.height,a=t.camera,r=t.inputHandler,o=t.batch,s=t.assets.atlas,d=s.findRegion("color_fill",-1),c=s.findRegion("banner",-1),u=.4*n,f=u*c.height/c.width,g=s.findRegion("start_btn",-1),p=s.findRegion("start_btn",2),l=n/3,v=l*g.height/g.width,w=[n/2-l/2,1.65*i/3,l,v],b={},m=!1;r.addEventListener("touchStart",(function(){0===e.gameState&&(b={x:r.getTouchedWorldCoord().x,y:r.getTouchedWorldCoord().y},h(b,w)&&(m=!0))})),r.addEventListener("touchEnd",(function(){0===e.gameState&&(m=!1,b={x:r.getTouchedWorldCoord().x,y:r.getTouchedWorldCoord().y},h(b,w)&&(e.gameState=1))}));return{update:function(e){o.setProjection(a.combined),o.begin(),o.setColor(1,1,1,.5),d.draw(o,0,0,n,i),o.setColor(1,1,1,1),c.draw(o,n/2-u/2-.15*u,1.1*i/3,u,f),(!0===m?p:g).draw(o,n/2-l/2,1.65*i/3,l,v),o.end()}}},u=n(4),f=n(9),g=function(){return{update:function(e,t,n){var i=t.beeState,a=t.beeInfos,r=t.GAP,o=n.batch,s=(n.height,n.width,n.camera);n.whiteTex;s.setPosition(i.x-r,0),o.setProjection(s.combined),o.begin(),i.stateTime+=e,a.animation.getKeyFrame(i.stateTime,f.a.LOOP).draw(o,i.x,i.y,i.width,i.height,i.width/2,i.height/2,i.rotation),o.end()}}},p=function(){return{update:function(e,t,n){n.width;var i=n.height,a=t.beeState,r=t.beeInfos,o=t.groundY;1!==t.gameState&&2!==t.gameState||(a.x+=e*r.speedX,a.y+=e*r.speedY,r.speedY+=r.yAcceleration*e,r.speedY<0?a.rotation=Math.max(a.rotation-=r.rotateSpeedUp*e,r.rotateUp):a.rotation=Math.min(a.rotation+=r.rotateSpeedDown*e,r.rotateDown),a.y>o-a.height?(a.y=o-a.height,2===t.gameState&&(t.beeInfos.falledDown=!0)):a.y<-i/60&&(r.speedY=0,a.y=0))}}},l=function(){return{init:function(e,t){t.width,t.height;t.inputHandler.addEventListener("touchStart",(function(){e.beeState;var t=e.beeInfos;1===e.gameState&&(t.speedY=t.speedUpY)}))},update:function(e,t,n){}}},v=(n(5),function(e,t,n,i,a,r){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,s=!(arguments.length>7&&void 0!==arguments[7])||arguments[7],d=e.width,h=e.height,c=n,u=c/h*d,f=0,g=r;return{update:function(e,t){for(f-=(r=2!==t&&0!==t||!s?g:0)*e;f<=-(u+o);)f+=u+o},draw:function(n){for(var r=f;r<t;)e.draw(n,i+r,a,u,c),r+=u+o}}}),w=function(){var e=[];return{add:function(t){return e.push(t)},addAll:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];for(var a=0,r=n;a<r.length;a++){var o=r[a];e.push(o)}},update:function(t,n){var i,a=Object(u.a)(e);try{for(a.s();!(i=a.n()).done;){i.value.update(t,n)}}catch(r){a.e(r)}finally{a.f()}},draw:function(t){var n,i=Object(u.a)(e);try{for(i.s();!(n=i.n()).done;){n.value.draw(t)}}catch(a){i.e(a)}finally{i.f()}}}},b=v,m=function(){var e;return{init:function(t,n){var i=n.assets,a=n.width,r=n.height,o=i.atlas,s=o.findRegion("bg",-1),d=o.findRegion("cay",-1),h=o.findRegion("cot_dien"),c=o.findRegion("house",-1),u=o.findRegion("cloud",-1),f=o.findRegion("bike",-1),g=o.findRegion("bike2",-1),p=t.groundY,l=b(s,a,r,0,-r/7,t.beeInfos.speedX,-.1),v=r/30,m=b(u,a,r/4.4,0,p+v-r/4.4,t.beeInfos.speedX,-.1),x=b(d,a,r/8.2,0,p+v-r/7.5,t.beeInfos.speedX,-.1),y=b(h,a,r/4,0,p-r/5.5,t.beeInfos.speedX,0),I=b(c,a,r/4.5,0,p-r/6.5,t.beeInfos.speedX,0),S=b(f,a,r/12,0,p-r/12,t.beeInfos.speedX,0,!1),C=b(g,a,r/12,0,p-r/12,t.beeInfos.speedX+a/3,0,!1);(e=w()).add(l),e.add(m),e.add(I),e.add(y),e.add(x),e.add(S),e.add(C)},update:function(t,n,i){var a=i.camera,r=(i.width,i.height,i.batch);a.setPosition(0,0),r.setProjection(a.combined),r.begin(),e.update(t,n.gameState),e.draw(r),r.end()}}},x=function(){var e=function(e,t,n,i,a,r){var o=a-(a-i)-t.distanceHeight,s=Math.random()*(.8*o-.2*o)+.2*o,d=o-s;e.push({x:n.x-r+t.distanceWidth,y1:0,y2:i,width:t.width,height1:s,height2:d,passed:!1})};return{init:function(t,n){var i=t.pipeList,a=t.beeState,r=t.pipeInfos,o=t.groundY,s=t.GAP,d=n.height;e(i,r,a,o,d,s)},update:function(t,n,i){for(var a=n.pipeList,r=n.beeState,o=n.pipeInfos,s=n.groundY,d=n.GAP,h=i.height,c=a.length-1;c>=0;c--)a[c].x<r.x-d-a[c].width&&(e(a,o,r,s,h,d),a.splice(c,1))}}},y=function(){var e,t,n,i,a;return{init:function(r,o){var s=r.pipeInfos,d=o.assets,h=(o.width,o.height,d.atlas);n=h.findRegion("bee_sign",-1),e=h.findRegion("pipe",-1),t=s.width*e.height/e.width,i=s.width/3,a=i*n.height/n.width},update:function(r,o,s){var d=o.pipeList,h=o.beeState,c=o.GAP,f=(s.width,s.height),g=s.camera,p=s.batch;s.whiteTex;g.setPosition(h.x-c,0),p.setProjection(g.combined),p.begin(),p.setColor(1,1,1,1);var l,v=Object(u.a)(d);try{for(v.s();!(l=v.n()).done;){var w=l.value;e.draw(p,w.x,w.y1+w.height1-t,w.width,t,w.width/2,t/2,Math.PI),e.draw(p,w.x,w.y2-w.height2,w.width,t),n.draw(p,w.x+w.width/2-i/2,w.y2-w.height2+f/17,i,a)}}catch(b){v.e(b)}finally{v.f()}p.setColor(1,1,1,1),p.end()}}},I=function(){var e;return{init:function(t,n){var i=n.assets,a=n.width,r=n.height,o=i.atlas,s=o.findRegion("bottom_ground",-1),d=o.findRegion("ground",-1),h=t.groundY,c=r/30,u=b(s,a,r/8,0,h+c,t.beeInfos.speedX,-.1),f=b(d,a,c,0,h,t.beeInfos.speedX,-.1);(e=w()).add(u),e.add(f)},update:function(t,n,i){var a=i.camera,r=(i.width,i.height,i.batch);a.setPosition(0,0),r.setProjection(a.combined),r.begin(),e.update(t,n.gameState),e.draw(r),r.end()}}},S=function(){return{update:function(e,t,n){n.batch,n.camera,n.whiteTex;for(var i=t.beeState,a=t.pipeList,r=(t.beeInfos,i.x+i.width/2-i.width/2*.8),o=i.x+i.width/2+i.width/2*.8,s=i.y,d=i.y+i.height,h=0;h<a.length;h++){var c=a[h],u=c.x,f=c.y1,g=c.y2,p=c.width,l=c.height1,v=c.height2;(r<u+p&&o>u&&s<f+l&&d>f||r<u+p&&o>u&&s<g&&d>g-v)&&(t.beeInfos.speedX=0,t.gameState=2)}}}},C=function(){return{update:function(e,t,n){for(var i=t.pipeList,a=t.beeState,r=0;r<i.length;r++)i[r].x+i[r].width<a.x&&!i[r].passed&&1===t.gameState&&(i[r].passed=!0,t.score+=1)}}},P=function(){var e,t,n;return{init:function(i,a){var r=a.assets,o=a.width,s=(a.height,r.atlas);e=[s.findRegion("dan_ong",1),s.findRegion("dan_ong",2)],n=[(t=[o/3,o/6])[0]*e[0].height/e[0].width,t[1]*e[1].height/e[1].width]},update:function(i,a,r){var o=a.decoList,s=a.beeState,d=r.width,h=r.height;if(Math.random()>.988){var c=Math.random()>.5?1:0;o.push({tex:e[c],x:s.x+d,y:Math.random()*(h/2-h/7)+h/7,width:t[c],height:n[c],speedX:Math.random()*(d/4-d/8)+d/8})}}}},k=function(){return{update:function(e,t,n){for(var i=t.decoList,a=t.beeState,r=t.GAP,o=i.length-1;o>=0;o--)i[o].x-=e*i[o].speedX,i[o].x+i[o].width<a.x-r&&i.splice(o,1)}}},R=function(){return{update:function(e,t,n){var i=t.decoList,a=t.beeState,r=t.GAP,o=n.batch,s=n.camera;s.setPosition(a.x-r,0),o.setProjection(s.combined),o.begin();for(var d=0;d<i.length;d++){var h=i[d];i[d].tex.draw(o,h.x,h.y,h.width,h.height)}o.end()}}},j=n(2),O=n(6),T=function(e,t,n){var i,a=!1,r=0,o=Object(u.a)(n);try{for(o.s();!(i=o.n()).done;){var s=i.value;if(s.first===e&&s.second===t){r=s.amount,a=!0;break}a=!1}}catch(d){o.e(d)}finally{o.f()}return a?r:0},W=function e(t,n,i,a){var r=this;Object(O.a)(this,e),this.addToCache=function(e,t,n,i,a){for(var o=0,s=0;s<e.length;s++){var d=e.charCodeAt(s),h=e.charCodeAt(s-1),c=r.findRegions(d),u=T(h,d,r.kerningsData);r.cache.push({key:c,x:t+o+c.xoffset*r.scale+u*r.scale,y:n+c.yoffset*r.scale+i*r.scale+a,width:c.width*r.scale,height:c.height*r.scale}),o+=c.xadvance*r.scale}},this.beforeDrawing=function(e,t,n,i){if(r.preDraw){for(var a=0,o=0,s=[],d=0;d<i.length;d++){var h=i.charCodeAt(d),c=r.findRegions(h);32!==h?o+=c.xadvance*r.scale:(a=c.xadvance*r.scale,s.push(o),o=0)}var u=Math.max.apply(Math,s)+a;r.newbase=n,r.scale=r.newbase/r.baseLine;for(var f=(i=i.trim()).split("/n").map((function(e){return e.trim()})),g=0,p=0;p<f.length;p++){i=f[p],r.oriWidth=0;for(var l=0;l<i.length;l++){var v=i.charCodeAt(l),w=i.charCodeAt(l-1),b=r.findRegions(v),m=T(w,v,r.kerningsData);r.oriWidth+=m*r.scale,i.length,r.oriWidth+=b.xadvance*r.scale}var x=r.oriWidth/r.fixedWidth;g=r.lineHeight*r.scale*p;var y=0,I="",S=0;if(x>1&&r.fixedWidth>u)for(var C=0;C<i.length;C++){I+=i[C];var P=i.charCodeAt(C);if((y+=r.findRegions(P).xadvance*r.scale)>=r.fixedWidth)for(var k=C;k>=0;){C--,k--;var R=r.findRegions(i.charCodeAt(C));if(y-=R.xadvance*r.scale,I=I.substring(0,I.length-1),y<=r.fixedWidth&&32===R.id){S=r.lineHeight*r.positionBreak.length,r.positionBreak.push(C),r.lastBreakIndex=C;for(var O=I.trim(),W=0,A=0,H=0;H<O.length;H++)A=r.findRegions(O.charCodeAt(H)),H===O.length-1?W+=A.width*r.scale:W+=A.xadvance*r.scale;var L=r.getPositionBasedOnMode(e,t,W),M=Object(j.a)(L,2),_=M[0],B=M[1];r.addToCache(O,_,B,S,g),y=0,k=-1,I=""}}if(C===i.length-1&&y<r.oriWidth){for(var D="",X=r.lastBreakIndex;X<=C;X++)D+=i[X];for(var Y=D.trim(),E=0,G=0,U=0;U<Y.length;U++)G=r.findRegions(Y.charCodeAt(U)),U===Y.length-1?E+=G.width*r.scale:E+=G.xadvance*r.scale;var F=r.getPositionBasedOnMode(e,t,E),N=Object(j.a)(F,2),J=N[0],z=N[1];S=r.lineHeight*r.positionBreak.length,r.addToCache(Y,J,z,S,g)}}if(x<=1||r.fixedWidth<u){var K=r.getPositionBasedOnMode(e,t,r.oriWidth),q=Object(j.a)(K,2),Q=q[0],V=q[1];r.addToCache(i,Q,V,0,g)}}0===r.type&&(r.preDraw=!1),r.oriHeight=r.newbase}},this.getPositionBasedOnMode=function(e,t,n){return 0===r.align?e-=n/2:1===r.align&&(e-=n),[e,t]},this.setAlignMode=function(e){r.align=e},this.setType=function(e){r.type=e},this.setLineHeight=function(e){r.lineHeight=e},this.setFixedGlyphWidth=function(e){r.fixedWidth=e},this.findRegions=function(e){for(var t=0;t<r.regions.length;t++)if(r.regions[t].id===e)return r.regions[t]},this.draw=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r.baseLine;if(0===r.type){r.preDraw&&r.beforeDrawing(n,i,a,t);for(var o=0;o<r.cache.length;o++){var s=r.cache[o];s.key.draw(e,s.x,s.y,s.width,s.height)}}if(1===r.type){r.beforeDrawing(n,i,a,t);for(var d=0;d<r.cache.length;d++){var h=r.cache[d];h.key.draw(e,h.x,h.y,h.width,h.height)}r.cache.length=0,r.positionBreak.length=0}},this.pageImage=t,this.regions=n,this.kerningsData=i,this.canvasWidth=a,this.type=0,this.align=2,this.lineHeight=t.lineHeight,this.baseLine=t.base,this.fixedWidth=a,this.position=new o.b(0,0),this.scale=0,this.newBase=0,this.oriWidth=0,this.oriHeight=0,this.positionBreak=[],this.lastBreakIndex=0,this.cache=[],this.preDraw=!0},A=0,H=1;function L(e,t){for(var n=e.split("/"),i=t.split("/"),a=[],r=0,o=n.length;r<o;r++)if(".."===n[r])a.pop();else{if("."===n[r])continue;a.push(n[r])}for(var s=0,d=i.length;s<d;s++)if(".."===i[s])a.pop();else{if("."===i[s])continue;a.push(i[s])}return a.join("/")}var M=function(){var e=Object(r.a)(a.a.mark((function e(t,n,i){var r,s,d,h,c,u,f,g,p,l,v,w,b,m,x,y,I,S,C,P,k,R,j,O,T,A,H,M,_,B,D,X,Y,E,G,U,F,N,J,z,K,q,Q,V,Z,$,ee,te,ne,ie,ae,re,oe,se,de,he,ce,ue,fe,ge,pe,le,ve,we,be,me,xe,ye,Ie,Se,Ce,Pe,ke,Re;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n).then((function(e){return e.text()}));case 2:r=e.sent,s=[],d=[],h=[],c=null,u=r.split("\n"),f=0,p=[],l=!1,v=0,w=2;case 13:if(b=u[w],p.length=0,"page"!==(g=b.split(" ").map((function(e){return e.trim()})))[0]){e.next=21;break}v+=1,e.next=22;break;case 21:return e.abrupt("break",25);case 22:w+=1,e.next=13;break;case 25:m=-1,x=2+v+1;case 27:if(void 0!==(y=u[f])){e.next=32;break}return l=!1,e.abrupt("break",39);case 32:if(2===y.split(" ").length&&("kernings"===y.split(" ")[0]&&(l=!0),f++,y=u[f]),l&&null!==c){for(g=(g=y.split(" ").map((function(e){return e.trim()}))).filter((function(e){return""!==e})),p.length=0,I=1;I<g.length;I++)p.push(g[I].split("=")[1]);S=parseInt(p[0],10),C=parseInt(p[1],10),P=parseInt(p[2],10),h.push({first:S,second:C,amount:P})}if(null===c){for(m+=1,p.length=0,g=y.split(" ").map((function(e){return e.trim()})),k=1;k<g.length;k++)p.push(g[k].split("=")[1]);for(R=p[0],j=parseInt(p[1],10),O=0!==parseInt(p[2],10),T=0!==parseInt(p[3],10),A=p[4],H=parseInt(p[5],10),M=parseInt(p[6],10),_=parseInt(p[7],10),B=parseInt(p[8],10),D=p[9].split(",").map((function(e){return parseInt(e,10)})),X=p[10].split(",").map((function(e){return parseInt(e,10)})),Y=parseInt(p[11],10),f++,y=u[f],p.length=0,g=y.split(" ").map((function(e){return e.trim()})),E=1;E<g.length;E++)p.push(g[E].split("=")[1]);for(G=parseInt(p[0],10),U=parseInt(p[1],10),F=parseInt(p[2],10),N=parseInt(p[3],10),J=parseInt(p[4],10),z=parseInt(p[5],10),K=parseInt(p[6],10),q=parseInt(p[7],10),Q=parseInt(p[8],10),V=parseInt(p[9],10),y=u[f=f+m+1],p.length=0,g=y.split(" ").map((function(e){return e.trim()})),Z=1;Z<g.length;Z++)p.push(g[Z].split("=")[1]);$=parseInt(p[0],10),ee=p[1].split('"'),te=L(n,"../".concat(ee[1])),c={file:te,page_id:$,face:R,size:j,bold:O,italic:T,charset:A,unicode:H,stretchH:M,smooth:_,aa:B,padding:D,spacing:X,outline:Y,lineHeight:G,base:U,scaleW:F,scaleH:N,num_of_pages:J,packed:z,alphaChnl:K,redChnl:q,greenChnl:Q,blueChnl:V},s.push(c),y=u[f=x]}if(!l&&null!==c){for(g=(g=y.split(" ").map((function(e){return e.trim()}))).filter((function(e){return""!==e})),p.length=0,ne=1;ne<g.length;ne++)p.push(g[ne].split("=")[1]);ie=parseInt(p[0],10),ae=parseInt(p[1],10),re=parseInt(p[2],10),oe=parseInt(p[3],10),se=parseInt(p[4],10),de=parseInt(p[5],10),he=parseInt(p[6],10),ce=parseInt(p[7],10),ue=parseInt(p[8],10),(fe={id:ie,left:ae,top:re,width:oe,height:se,xoffset:de,yoffset:he,xadvance:ce,page:c,id_page:ue}).id_page===m?d.push(fe):m===v-1?l=!0:(x=f,f=-1,c=null)}f++,e.next=27;break;case 39:ge=0,pe=s;case 40:if(!(ge<pe.length)){e.next=50;break}return le=pe[ge],e.next=44,Object(o.i)(t,le.file,i);case 44:le.texture=e.sent,le.invTextWidth=1/le.texture.width,le.invTextHeight=1/le.texture.height;case 47:ge++,e.next=40;break;case 50:for(ve=[],we=0,be=d;we<be.length;we++)me=be[we],xe=me.left,ye=me.top,Ie=me.width,Se=me.height,Ce=me.page,Pe=Ce.texture,ke=Ce.invTexWidth,Re=Ce.invTexHeight,ve.push(new o.a(Pe,xe,ye,Ie,Se,me,ke,Re));return e.abrupt("return",{getLineHeight:function(){return c.lineHeight},getPages:function(){return s},getRegions:function(){return ve},findRegions:function(e){for(var t=0;t<ve.length;t++)if(ve[t].id===e)return ve[t]},setNewText:function(e){return new W(c,ve,h,e)}});case 53:case"end":return e.stop()}}),e)})));return function(t,n,i){return e.apply(this,arguments)}}(),_=function(e,t,n){var i=t.width,a=t.height,r=t.camera,o=t.inputHandler,s=t.batch,d=t.assets.atlas,c=d.findRegion("score_board",-1),u=d.findRegion("color_fill",-1),f=d.findRegion("replay_btn",-1),g=d.findRegion("banner",-1),p=.4*i,l=p*g.height/g.width,v=i/1.8,w=v*c.height/c.width,b=i/4.7,m=b*f.height/f.width,x=[i/2-b/2,1*a/1.65,b,m],y=n.font.setNewText(i);y.setAlignMode(A);var I=0;I=e.score<1e3?a/10:e.score>=1e3&&e.score<1e4?a/13:a/15;var S={};o.addEventListener("touchStart",(function(){2===e.gameState&&(S={x:o.getTouchedWorldCoord().x,y:o.getTouchedWorldCoord().y},h(S,x)&&(n.state=0,n.setCurrentScreen(D(n))))}));return{update:function(t){r.setPosition(0,0),s.setProjection(r.combined),s.begin(),s.setColor(1,1,1,.5),u.draw(s,0,0,i,a),s.setColor(1,1,1,1),g.draw(s,i/2-p/2-.15*p,a/5.5,p,l),c.draw(s,i/2-v/2,a/2.7,v,w),y.draw(s,"".concat(e.score),i/2,a/2.15,I),f.draw(s,x[0],x[1],x[2],x[3]),s.end()}}},B=function(){var e;return{init:function(t,n){var i=n.width,a=n.font;(e=a.setNewText(i)).setAlignMode(A),e.setType(H)},update:function(t,n,i){var a=i.batch,r=i.camera,o=i.width,s=i.height;r.setPosition(0,0),a.setProjection(r.combined),a.begin(),e.draw(a,"".concat(n.score),o/2,s/12,s/16),a.end()}}},D=function(e){var t=e.width,n=e.height,i=e.gl,a=e.canvas,r=e.viewPort,s=e.whiteTex,d=e.assets,h=e.camera,f=e.font,v=Object(o.d)(i),w=Object(o.g)(a,r),b=function(e,t,n){for(var i=[],a=e.width/t,r=e.height/n,s=0;s<t;s++)for(var d=0;d<n;d++)i.push(new o.a(e,a*s,r*d,a,r));return i}(d.main,3,1),j=Object(o.c)(.2,b),O=t/7,T=O*b[0].height/b[0].width,W=t/7,A=t/4,H={gameState:e.state,score:0,beeState:{x:W,y:n/5,width:O,height:T,stateTime:0,rotation:0},beeInfos:{falledDown:!1,animation:j,speedX:t,speedY:0,speedUpY:.9*-n,yAcceleration:3*n,rotateSpeedUp:3*Math.PI,rotateSpeedDown:1.3*Math.PI,rotateUp:-Math.PI/4,rotateDown:Math.PI/2},pipeInfos:{width:A,distanceWidth:t,distanceHeight:n/4.8},pipeList:[],decoList:[],groundY:n-n/8-n/30,GAP:W},L={inputHandler:w,width:t,height:n,gl:i,canvas:a,viewPort:r,whiteTex:s,assets:d,camera:h,batch:v,font:f},M=function(e,t){var n=[],i=[];return{addSystem:function(a){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.init&&a.init(e,t),r?(i.push(a),n.push(a)):n.push(a)},update:function(a){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r){var o,s=Object(u.a)(i);try{for(s.s();!(o=s.n()).done;){var d=o.value;d.update(a,e,t)}}catch(g){s.e(g)}finally{s.f()}}else{var h,c=Object(u.a)(n);try{for(c.s();!(h=c.n()).done;){var f=h.value;f.update(a,e,t)}}catch(g){c.e(g)}finally{c.f()}}}}}(H,L);M.addSystem(x()),M.addSystem(p(),!0),M.addSystem(l()),M.addSystem(S()),M.addSystem(C()),M.addSystem(P(),!0),M.addSystem(k(),!0),M.addSystem(m(),!0),M.addSystem(R(),!0),M.addSystem(y(),!0),M.addSystem(I(),!0),M.addSystem(g(),!0),M.addSystem(B());var D=c(H,L,e),X=_(H,L,e);return{update:function(e){2===H.gameState||0===H.gameState?(M.update(e,!0),0===H.gameState?D.update(e):2===H.gameState&&H.beeInfos.falledDown&&X.update(e)):1===H.gameState&&M.update(e)},destroy:function(){w.cleanup()}}};(function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,i,r,s,h,c,u,f,g,p,l,v,w;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("main"),n=document.getElementById("infos"),47,100,i=Object(o.f)(t,47,100),r=i.getContext(),s=i.getCamera(),h=d()(r),c={state:0,gl:r,width:47,height:100,canvas:t,viewPort:i,camera:s,whiteTex:h,setCurrentScreen:function(e){c.currentScreen&&c.currentScreen.destroy(),c.currentScreen=e}},e.next=10,Object(o.h)(r,"./assets/bee.atlas");case 10:return u=e.sent,e.next=13,Object(o.i)(r,"./assets/sky.png");case 13:return f=e.sent,e.next=16,Object(o.i)(r,"./assets/bg-start.jpg");case 16:return g=e.sent,e.next=19,Object(o.i)(r,"./assets/main.png");case 19:return p=e.sent,c.assets={atlas:u,sky:f,bgStart:g,main:p},e.next=23,M(r,"./fonts/mono.fnt");case 23:l=e.sent,c.font=l,c.setCurrentScreen(D(c)),r.clearColor(1,1,1,1),v=function(e){r.clear(r.COLOR_BUFFER_BIT),c.currentScreen.update(e)},w=Object(o.e)(v),setInterval((function(){n.innerHTML=w.getFps()}),1e3);case 30:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},[[30,1,2]]]);
//# sourceMappingURL=main.8012d44d.chunk.js.map