"use strict";(self.webpackChunkmoney_lover_landing_page=self.webpackChunkmoney_lover_landing_page||[]).push([[89],{7607:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),l=a(2263),i=a(2719),r=a(7756),o=a(6742),m=a(4973);var s=function(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.createElement(o.Z,{className:"pagination-nav__link",to:l},n.createElement("div",{className:"pagination-nav__label"},n.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=function(e){var t=e.metadata,a=e.items,o=(e.sidebar,(0,l.default)().siteConfig.title),m=t.blogDescription,c=t.blogTitle,g="/"===t.permalink?o:c;return n.createElement(i.Z,{title:g,description:m},n.createElement("div",{className:"container mt-6"},n.createElement("div",{className:"grid grid-cols-1 w-full text-center"},n.createElement("h1",{className:"font-ibm font-medium text-32 lg:text-64 leading-40 lg:leading-83 text-dark-tiny"},"Join us &"),n.createElement("h1",{className:"lg:inline font-ibm font-medium text-32 lg:text-64 leading-40 lg:leading-83 text-dark-tiny"},"Make"," ",n.createElement("span",{className:"font-ibm font-medium text-32 lg:text-64 leading-40 lg:leading-83 text-green-ml"},"awesome ",n.createElement("br",{className:"lg:hidden"})," products."))),n.createElement("main",{className:"lg:px-10 grid grid-cols-12 gap-y-4 mt-8 mb-8"},a.map((function(e){var t=e.content;return n.createElement(r.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s,{metadata:t}))))}},7756:function(e,t,a){var n=a(7294),l=a(6742),i=a(1217);t.Z=function(e){e.children;var t=e.frontMatter,a=e.metadata,r=(e.truncated,e.isBlogPostPage,a.date),o=(a.formattedDate,a.permalink),m=t.position,s=t.salary,c=t.workTime,g=t.image,d=t.keywords;return n.createElement(n.Fragment,null,n.createElement(i.Z,{keywords:d,image:g}),n.createElement("article",{style:{border:"1px solid #F1F1F1"},className:"px-6 py-4 col-span-full md:col-span-8 md:col-start-3 rounded-lg"},n.createElement(l.Z,{style:{textDecoration:"none"},className:"font-bold text-left text-20 leading-28 text-dark-tiny",to:o},m," ",n.createElement("br",{className:"lg:hidden"}),"(L\u01b0\u01a1ng - ",s,")"),n.createElement("p",{className:"mt-2 text-16 leading-24 text-dark-brown whitespace-nowrap"},!0===c?"To\xe0n th\u1eddi gian":"B\xe1n th\u1eddi gian"," \u2022 H\xe0 N\u1ed9i \u2022"," ",function(e){var t=Math.floor(((new Date).getTime()-new Date(e).getTime())/1e3),a=t/31536e3;return a>1?Math.floor(a)+" years ago":(a=t/2592e3)>1?Math.floor(a)+" months ago":(a=t/86400,Math.floor(a)+" days ago")}(r))))}}}]);