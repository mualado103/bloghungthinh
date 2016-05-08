
.orbit-container {
  overflow: hidden;
  width: 100%;
  position: relative;
  background: none; }
  .orbit-container .orbit-slides-container {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    -webkit-transform: translateZ(0); }
    .orbit-container .orbit-slides-container img {
      display: block;
      max-width: 100%; }
    .orbit-container .orbit-slides-container > * {
      position: absolute;
      top: 0;
      width: 100%;
      margin-left: 100%; }
      .orbit-container .orbit-slides-container > *:first-child {
        margin-left: 0%; }
      .orbit-container .orbit-slides-container > * .orbit-caption {
        position: absolute;
        bottom: 0;
        background-color: rgba(51, 51, 51, 0.8);
        color: white;
        width: 100%;
        padding: 0.625rem 0.875rem;
        font-size: 0.875rem; }
  .orbit-container .orbit-slide-number {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 12px;
    color: white;
    background: rgba(0, 0, 0, 0);
    z-index: 10; }
    .orbit-container .orbit-slide-number span {
      font-weight: 700;
      padding: 0.3125rem; }
  .orbit-container .orbit-timer {
    position: absolute;
    top: 12px;
    right: 10px;
    height: 6px;
    width: 100px;
    z-index: 10; }
    .orbit-container .orbit-timer .orbit-progress {
      height: 3px;
      background-color: rgba(255, 255, 255, 0.3);
      display: block;
      width: 0%;
      position: relative;
      right: 20px;
      top: 5px; }
    .orbit-container .orbit-timer > span {
      display: none;
      position: absolute;
      top: 0px;
      right: 0;
      width: 11px;
      height: 14px;
      border: solid 4px white;
      border-top: none;
      border-bottom: none; }
    .orbit-container .orbit-timer.paused > span {
      right: -4px;
      top: 0px;
      width: 11px;
      height: 14px;
      border: inset 8px;
      border-left-style: solid;
      border-color: transparent;
      border-left-color: white; }
      .orbit-container .orbit-timer.paused > span.dark {
        border-left-color: #333333; }
  .orbit-container:hover .orbit-timer > span {
    display: block; }
  .orbit-container .orbit-prev,
  .orbit-container .orbit-next {
    position: absolute;
    top: 45%;
    margin-top: -25px;
    width: 36px;
    height: 60px;
    line-height: 50px;
    color: white;
    background-color: transparent;
    text-indent: -9999px !important;
    z-index: 10; }
    .orbit-container .orbit-prev:hover,
    .orbit-container .orbit-next:hover {
      background-color: rgba(0, 0, 0, 0.3); }
    .orbit-container .orbit-prev > span,
    .orbit-container .orbit-next > span {
      position: absolute;
      top: 50%;
      margin-top: -10px;
      display: block;
      width: 0;
      height: 0;
      border: inset 10px; }
  .orbit-container .orbit-prev {
    left: 0; }
    .orbit-container .orbit-prev > span {
      border-right-style: solid;
      border-color: transparent;
      border-right-color: white; }
    .orbit-container .orbit-prev:hover > span {
      border-right-color: white; }
  .orbit-container .orbit-next {
    right: 0; }
    .orbit-container .orbit-next > span {
      border-color: transparent;
      border-left-style: solid;
      border-left-color: white;
      left: 50%;
      margin-left: -4px; }
    .orbit-container .orbit-next:hover > span {
      border-left-color: white; }

.orbit-bullets-container {
  text-align: center; }

.orbit-bullets {
  margin: 0 auto 30px auto;
  overflow: hidden;
  position: relative;
  top: 10px;
  float: none;
  text-align: center;
  display: block; }
  .orbit-bullets li {
    cursor: pointer;
    display: inline-block;
    width: 0.5625rem;
    height: 0.5625rem;
    background: #cccccc;
    float: none;
    margin-right: 6px;
    border-radius: 1000px; }
    .orbit-bullets li.active {
      background: #999999; }
    .orbit-bullets li:last-child {
      margin-right: 0; }

.touch .orbit-container .orbit-prev,
.touch .orbit-container .orbit-next {
  display: none; }
.touch .orbit-bullets {
  display: none; }

@media only screen and (min-width: 40.063em) {
  .touch .orbit-container .orbit-prev,
  .touch .orbit-container .orbit-next {
    display: inherit; }
  .touch .orbit-bullets {
    display: block; } }
@media only screen and (max-width: 40em) {
  .orbit-stack-on-small .orbit-slides-container {
    height: auto !important; }
  .orbit-stack-on-small .orbit-slides-container > * {
    position: relative;
    margin: 0% !important;
    opacity: 1 !important; }
  .orbit-stack-on-small .orbit-slide-number {
    display: none; }

  .orbit-timer {
    display: none; }

  .orbit-next, .orbit-prev {
    display: none; }

  .orbit-bullets {
    display: none; } }
[data-magellan-expedition], [data-magellan-expedition-clone] {
  background: white;
  z-index: 50;
  min-width: 100%;
  padding: 10px; }
  [data-magellan-expedition] .sub-nav, [data-magellan-expedition-clone] .sub-nav {
    margin-bottom: 0; }
    [data-magellan-expedition] .sub-nav dd, [data-magellan-expedition-clone] .sub-nav dd {
      margin-bottom: 0; }
    [data-magellan-expedition] .sub-nav a, [data-magellan-expedition-clone] .sub-nav a {
      line-height: 1.8em; }

.icon-bar {
  width: 100%;
  font-size: 0;
  display: inline-block;
  background: #333333; }
  .icon-bar > * {
    text-align: center;
    font-size: 1rem;
    width: 25%;
    margin: 0 auto;
    display: block;
    padding: 1.25rem;
    float: left; }
    .icon-bar > * i, .icon-bar > * img {
      display: block;
      margin: 0 auto; }
      .icon-bar > * i + label, .icon-bar > * img + label {
        margin-top: .0625rem; }
    .icon-bar > * i {
      font-size: 1.875rem;
      vertical-align: middle; }
    .icon-bar > * img {
      width: 1.875rem;
      height: 1.875rem; }
  .icon-bar.label-right > * i, .icon-bar.label-right > * img {
    margin: 0 .0625rem 0 0;
    display: inline-block; }
    .icon-bar.label-right > * i + label, .icon-bar.label-right > * img + label {
      margin-top: 0; }
  .icon-bar.label-right > * label {
    display: inline-block; }
  .icon-bar.vertical.label-right > * {
    text-align: left; }
  .icon-bar.vertical, .icon-bar.small-vertical {
    height: 100%;
    width: auto; }
    .icon-bar.vertical .item, .icon-bar.small-vertical .item {
      width: auto;
      margin: auto;
      float: none; }
  @media only screen and (min-width: 40.063em) {
    .icon-bar.medium-vertical {
      height: 100%;
      width: auto; }
      .icon-bar.medium-vertical .item {
        width: auto;
        margin: auto;
        float: none; } }
  @media only screen and (min-width: 64.063em) {
    .icon-bar.large-vertical {
      height: 100%;
      width: auto; }
      .icon-bar.large-vertical .item {
        width: auto;
        margin: auto;
        float: none; } }
  .icon-bar > * {
    font-size: 1rem;
    padding: 1.25rem; }
    .icon-bar > * i + label, .icon-bar > * img + label {
      margin-top: .0625rem; }
    .icon-bar > * i {
      font-size: 1.875rem; }
    .icon-bar > * img {
      width: 1.875rem;
      height: 1.875rem; }
  .icon-bar > *:hover {
    background: #008cba; }
  .icon-bar > * label {
    color: white; }
  .icon-bar > * i {
    color: white; }

.icon-bar.two-up .item {
  width: 50%; }
.icon-bar.two-up.vertical .item, .icon-bar.two-up.small-vertical .item {
  width: auto; }
@media only screen and (min-width: 40.063em) {
  .icon-bar.two-up.medium-vertical .item {
    width: auto; } }
@media only screen and (min-width: 64.063em) {
  .icon-bar.two-up.large-vertical .item {
    width: auto; } }
.icon-bar.three-up .item {
  width: 33.3333%; }
.icon-bar.three-up.vertical .item, .icon-bar.three-up.small-vertical .item {
  width: auto; }
@media only screen and (min-width: 40.063em) {
  .icon-bar.three-up.medium-vertical .item {
    width: auto; } }
@media only screen and (min-width: 64.063em) {
  .icon-bar.three-up.large-vertical .item {
    width: auto; } }
.icon-bar.four-up .item {
  width: 25%; }
.icon-bar.four-up.vertical .item, .icon-bar.four-up.small-vertical .item {
  width: auto; }
@media only screen and (min-width: 40.063em) {
  .icon-bar.four-up.medium-vertical .item {
    width: auto; } }
@media only screen and (min-width: 64.063em) {
  .icon-bar.four-up.large-vertical .item {
    width: auto; } }
.icon-bar.five-up .item {
  width: 20%; }
.icon-bar.five-up.vertical .item, .icon-bar.five-up.small-vertical .item {
  width: auto; }
@media only screen and (min-width: 40.063em) {
  .icon-bar.five-up.medium-vertical .item {
    width: auto; } }
@media only screen and (min-width: 64.063em) {
  .icon-bar.five-up.large-vertical .item {
    width: auto; } }
.icon-bar.six-up .item {
  width: 16.66667%; }
.icon-bar.six-up.vertical .item, .icon-bar.six-up.small-vertical .item {
  width: auto; }
@media only screen and (min-width: 40.063em) {
  .icon-bar.six-up.medium-vertical .item {
    width: auto; } }
@media only screen and (min-width: 64.063em) {
  .icon-bar.six-up.large-vertical .item {
    width: auto; } }

.tabs {
  margin-bottom: 0 !important;
  margin-left: 0; }
  .tabs:before, .tabs:after {
    content: " ";
    display: table; }
  .tabs:after {
    clear: both; }
  .tabs dd, .tabs .tab-title {
    position: relative;
    margin-bottom: 0 !important;
    list-style: none;
    float: left; }
    .tabs dd > a, .tabs .tab-title > a {
      outline: none;
      display: block;
      background-color: #efefef;
      color: #222222;
      padding: 1rem 2rem;
      font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
      font-size: 1rem; }
      .tabs dd > a:hover, .tabs .tab-title > a:hover {
        background-color: #e1e1e1; }
    .tabs dd.active a, .tabs .tab-title.active a {
      background-color: white;
      color: #222222; }
  .tabs.radius dd:first-child a, .tabs.radius .tab:first-child a {
    -webkit-border-bottom-left-radius: 3px;
    -webkit-border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px; }
  .tabs.radius dd:last-child a, .tabs.radius .tab:last-child a {
    -webkit-border-bottom-right-radius: 3px;
    -webkit-border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px; }
  .tabs.vertical dd, .tabs.vertical .tab-title {
    position: inherit;
    float: none;
    display: block;
    top: auto; }

.tabs-content {
  margin-bottom: 1.5rem;
  width: 100%; }
  .tabs-content:before, .tabs-content:after {
    content: " ";
    display: table; }
  .tabs-content:after {
    clear: both; }
  .tabs-content > .content {
    display: none;
    float: left;
    padding: 0.9375rem 0;
    width: 100%; }
    .tabs-content > .content.active {
      display: block;
      float: none; }
    .tabs-content > .content.contained {
      padding: 0.9375rem; }
  .tabs-content.vertical {
    display: block; }
    .tabs-content.vertical > .content {
      padding: 0 0.9375rem; }

@media only screen and (min-width: 40.063em) {
  .tabs.vertical {
    width: 20%;
    max-width: 20%;
    float: left;
    margin: 0 0 1.25rem; }

  .tabs-content.vertical {
    width: 80%;
    max-width: 80%;
    float: left;
    margin-left: -1px;
    padding-left: 1rem; } }
.no-js .tabs-content > .content {
  display: block;
  float: none; }

ul.pagination {
  display: block;
  min-height: 1.5rem;
  margin-left: -0.3125rem; }
  ul.pagination li {
    height: 1.5rem;
    color: #222222;
    font-size: 0.875rem;
    margin-left: 0.3125rem; }
    ul.pagination li a, ul.pagination li button {
      display: block;
      padding: 0.0625rem 0.625rem 0.0625rem;
      color: #999999;
      background: none;
      border-radius: 3px;
      font-weight: normal;
      font-size: 1em;
      line-height: inherit;
      transition: background-color 300ms ease-out; }
    ul.pagination li:hover a,
    ul.pagination li a:focus, ul.pagination li:hover button,
    ul.pagination li button:focus {
      background: #e6e6e6; }
    ul.pagination li.unavailable a, ul.pagination li.unavailable button {
      cursor: default;
      color: #999999; }
    ul.pagination li.unavailable:hover a, ul.pagination li.unavailable a:focus, ul.pagination li.unavailable:hover button, ul.pagination li.unavailable button:focus {
      background: transparent; }
    ul.pagination li.current a, ul.pagination li.current button {
      background: #008cba;
      color: white;
      font-weight: bold;
      cursor: default; }
      ul.pagination li.current a:hover, ul.pagination li.current a:focus, ul.pagination li.current button:hover, ul.pagination li.current button:focus {
        background: #008cba; }
  ul.pagination li {
    float: left;
    display: block; }

/* Pagination centred wrapper */
.pagination-centered {
  text-align: center; }
  .pagination-centered ul.pagination li {
    float: none;
    display: inline-block; }

.side-nav {
  display: block;
  margin: 0;
  padding: 0.875rem 0;
  list-style-type: none;
  list-style-position: outside;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif; }
  .side-nav li {
    margin: 0 0 0.4375rem 0;
    font-size: 0.875rem;
    font-weight: normal; }
    .side-nav li a:not(.button) {
      display: block;
      color: #008cba;
      margin: 0;
      padding: 0.4375rem 0.875rem; }
      .side-nav li a:not(.button):hover, .side-nav li a:not(.button):focus {
        background: rgba(0, 0, 0, 0.025);
        color: #1cc7ff; }
    .side-nav li.active > a:first-child:not(.button) {
      color: #1cc7ff;
      font-weight: normal;
      font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif; }
    .side-nav li.divider {
      border-top: 1px solid;
      height: 0;
      padding: 0;
      list-style: none;
      border-top-color: white; }
    .side-nav li.heading {
      color: #008cba;
      font-size: 0.875rem;
      font-weight: bold;
      text-transform: uppercase; }

.accordion {
  margin-bottom: 0; }
  .accordion:before, .accordion:after {
    content: " ";
    display: table; }
  .accordion:after {
    clear: both; }
  .accordion .accordion-navigation, .accordion dd {
    display: block;
    margin-bottom: 0 !important; }
    .accordion .accordion-navigation.active > a, .accordion dd.active > a {
      background: #e8e8e8; }
    .accordion .accordion-navigation > a, .accordion dd > a {
      background: #efefef;
      color: #222222;
      padding: 1rem;
      display: block;
      font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
      font-size: 1rem; }
      .accordion .accordion-navigation > a:hover, .accordion dd > a:hover {
        background: #e3e3e3; }
    .accordion .accordion-navigation > .content, .accordion dd > .content {
      display: none;
      padding: 0.9375rem; }
      .accordion .accordion-navigation > .content.active, .accordion dd > .content.active {
        display: block;
        background: white; }

.text-left {
  text-align: left !important; }

.text-right {
  text-align: right !important; }

.text-center {
  text-align: center !important; }

.text-justify {
  text-align: justify !important; }

@media only screen and (max-width: 40em) {
  .small-only-text-left {
    text-align: left !important; }

  .small-only-text-right {
    text-align: right !important; }

  .small-only-text-center {
    text-align: center !important; }

  .small-only-text-justify {
    text-align: justify !important; } }
@media only screen {
  .small-text-left {
    text-align: left !important; }

  .small-text-right {
    text-align: right !important; }

  .small-text-center {
    text-align: center !important; }

  .small-text-justify {
    text-align: justify !important; } }
@media only screen and (min-width: 40.063em) and (max-width: 64em) {
  .medium-only-text-left {
    text-align: left !important; }

  .medium-only-text-right {
    text-align: right !important; }

  .medium-only-text-center {
    text-align: center !important; }

  .medium-only-text-justify {
    text-align: justify !important; } }
@media only screen and (min-width: 40.063em) {
  .medium-text-left {
    text-align: left !important; }

  .medium-text-right {
    text-align: right !important; }

  .medium-text-center {
    text-align: center !important; }

  .medium-text-justify {
    text-align: justify !important; } }
@media only screen and (min-width: 64.063em) and (max-width: 90em) {
  .large-only-text-left {
    text-align: left !important; }

  .large-only-text-right {
    text-align: right !important; }

  .large-only-text-center {
    text-align: center !important; }

  .large-only-text-justify {
    text-align: justify !important; } }
@media only screen and (min-width: 64.063em) {
  .large-text-left {
    text-align: left !important; }

  .large-text-right {
    text-align: right !important; }

  .large-text-center {
    text-align: center !important; }

  .large-text-justify {
    text-align: justify !important; } }
@media only screen and (min-width: 90.063em) and (max-width: 120em) {
  .xlarge-only-text-left {
    text-align: left !important; }

  .xlarge-only-text-right {
    text-align: right !important; }

  .xlarge-only-text-center {
    text-align: center !important; }

  .xlarge-only-text-justify {
    text-align: justify !important; } }
@media only screen and (min-width: 90.063em) {
  .xlarge-text-left {
    text-align: left !important; }

  .xlarge-text-right {
    text-align: right !important; }

  .xlarge-text-center {
    text-align: center !important; }

  .xlarge-text-justify {
    text-align: justify !important; } }
@media only screen and (min-width: 120.063em) and (max-width: 99999999em) {
  .xxlarge-only-text-left {
    text-align: left !important; }

  .xxlarge-only-text-right {
    text-align: right !important; }

  .xxlarge-only-text-center {
    text-align: center !important; }

  .xxlarge-only-text-justify {
    text-align: justify !important; } }
@media only screen and (min-width: 120.063em) {
  .xxlarge-text-left {
    text-align: left !important; }

  .xxlarge-text-right {
    text-align: right !important; }

  .xxlarge-text-center {
    text-align: center !important; }

  .xxlarge-text-justify {
    text-align: justify !important; } }
/* Typography resets */
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0; }

/* Default Link Styles */
a {
  color: #008cba;
  text-decoration: none;
  line-height: inherit; }
  a:hover, a:focus {
    color: #0078a0; }
  a img {
    border: none; }

/* Default paragraph styles */
p {
  font-family: inherit;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  text-rendering: optimizeLegibility; }
  p.lead {
    font-size: 1.21875rem;
    line-height: 1.6; }
  p aside {
    font-size: 0.875rem;
    line-height: 1.35;
    font-style: italic; }

/* Default header styles */
h1, h2, h3, h4, h5, h6 {
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  color: #222222;
  text-rendering: optimizeLegibility;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.4; }
  h1 small, h2 small, h3 small, h4 small, h5 small, h6 small {
    font-size: 60%;
    color: #6f6f6f;
    line-height: 0; }

h1 {
  font-size: 2.125rem; }

h2 {
  font-size: 1.6875rem; }

h3 {
  font-size: 1.375rem; }

h4 {
  font-size: 1.125rem; }

h5 {
  font-size: 1.125rem; }

h6 {
  font-size: 1rem; }

.subheader {
  line-height: 1.4;
  color: #6f6f6f;
  font-weight: normal;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem; }

hr {
  border: solid #dddddd;
  border-width: 1px 0 0;
  clear: both;
  margin: 1.25rem 0 1.1875rem;
  height: 0; }

/* Helpful Typography Defaults */
em,
i {
  font-style: italic;
  line-height: inherit; }

strong,
b {
  font-weight: bold;
  line-height: inherit; }

small {
  font-size: 60%;
  line-height: inherit; }

code {
  font-family: Consolas, "Liberation Mono", Courier, monospace;
  font-weight: normal;
  color: #333333;
  background-color: #f8f8f8;
  border-width: 1px;
  border-style: solid;
  border-color: #dfdfdf;
  padding: 0.125rem 0.3125rem 0.0625rem; }

/* Lists */
ul,
ol,
dl {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  list-style-position: outside;
  font-family: inherit; }

ul {
  margin-left: 1.1rem; }
  ul.no-bullet {
    margin-left: 0; }
    ul.no-bullet li ul,
    ul.no-bullet li ol {
      margin-left: 1.25rem;
      margin-bottom: 0;
      list-style: none; }

/* Unordered Lists */
ul li ul,
ul li ol {
  /* margin-left: 1.25rem; */
  margin-bottom: 0; }
ul.square li ul, ul.circle li ul, ul.disc li ul {
  list-style: inherit; }
ul.square {
  list-style-type: square;
  margin-left: 1.1rem; }
ul.circle {
  list-style-type: circle;
  margin-left: 1.1rem; }
ul.disc {
  list-style-type: disc;
  margin-left: 1.1rem; }
ul.no-bullet {
  list-style: none; }

/* Ordered Lists */
ol {
  margin-left: 1.4rem; }
  ol li ul,
  ol li ol {
    margin-left: 1.25rem;
    margin-bottom: 0; }

/* Definition Lists */
dl dt {
  margin-bottom: 0.3rem;
  font-weight: bold; }
dl dd {
  margin-bottom: 0.75rem; }

/* Abbreviations */
abbr,
acronym {
  text-transform: uppercase;
  font-size: 90%;
  color: #222222;
  cursor: help; }

abbr {
  text-transform: none; }
  abbr[title] {
    border-bottom: 1px dotted #dddddd; }

/* Blockquotes */
blockquote {
  margin: 0 0 1.25rem;
  padding: 0.5625rem 1.25rem 0 1.1875rem;
  border-left: 1px solid #dddddd; }
  blockquote cite {
    display: block;
    font-size: 0.8125rem;
    color: #555555; }
    blockquote cite:before {
      content: "\2014 \0020"; }
    blockquote cite a,
    blockquote cite a:visited {
      color: #555555; }

blockquote,
blockquote p {
  line-height: 1.6;
  color: #6f6f6f; }

/* Microformats */
.vcard {
  display: inline-block;
  margin: 0 0 1.25rem 0;
  border: 1px solid #dddddd;
  padding: 0.625rem 0.75rem; }
  .vcard li {
    margin: 0;
    display: block; }
  .vcard .fn {
    font-weight: bold;
    font-size: 0.9375rem; }

.vevent .summary {
  font-weight: bold; }
.vevent abbr {
  cursor: default;
  text-decoration: none;
  font-weight: bold;
  border: none;
  padding: 0 0.0625rem; }

@media only screen and (min-width: 40.063em) {
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.4; }

  h1 {
    font-size: 2.75rem; }

  h2 {
    font-size: 2.3125rem; }

  h3 {
    font-size: 1.6875rem; }

  h4 {
    font-size: 1.4375rem; }

  h5 {
    font-size: 1.125rem; }

  h6 {
    font-size: 1rem; } }
/*
 * Print styles.
 *
 * Inlined to avoid required HTTP connection: www.phpied.com/delay-loading-your-print-css/
 * Credit to Paul Irish and HTML5 Boilerplate (html5boilerplate.com)
*/
.print-only {
  display: none !important; }

@media print {
  * {
    background: transparent !important;
    color: black !important;
    /* Black prints faster: h5bp.com/s */
    box-shadow: none !important;
    text-shadow: none !important; }

  a,
  a:visited {
    text-decoration: underline; }

  a[href]:after {
    content: " (" attr(href) ")"; }

  abbr[title]:after {
    content: " (" attr(title) ")"; }

  .ir a:after,
  a[href^="javascript:"]:after,
  a[href^="#"]:after {
    content: ""; }

  pre,
  blockquote {
    border: 1px solid #999999;
    page-break-inside: avoid; }

  thead {
    display: table-header-group;
    /* h5bp.com/t */ }

  tr,
  img {
    page-break-inside: avoid; }

  img {
    max-width: 100% !important; }

  @page {
    margin: 0.5cm; }

  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3; }

  h2,
  h3 {
    page-break-after: avoid; }

  .hide-on-print {
    display: none !important; }

  .print-only {
    display: block !important; }

  .hide-for-print {
    display: none !important; }

  .show-for-print {
    display: inherit !important; } }
.split.button {
  position: relative;
  padding-right: 5.0625rem; }
  .split.button span {
    display: block;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border-left: solid 1px; }
    .split.button span:after {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      display: block;
      border-style: inset;
      top: 50%;
      left: 50%; }
    .split.button span:active {
      background-color: rgba(0, 0, 0, 0.1); }
  .split.button span {
    border-left-color: rgba(255, 255, 255, 0.5); }
  .split.button span {
    width: 3.09375rem; }
    .split.button span:after {
      border-top-style: solid;
      border-width: 0.375rem;
      top: 48%;
      margin-left: -0.375rem; }
  .split.button span:after {
    border-color: white transparent transparent transparent; }
  .split.button.secondary span {
    border-left-color: rgba(255, 255, 255, 0.5); }
  .split.button.secondary span:after {
    border-color: white transparent transparent transparent; }
  .split.button.alert span {
    border-left-color: rgba(255, 255, 255, 0.5); }
  .split.button.success span {
    border-left-color: rgba(255, 255, 255, 0.5); }
  .split.button.tiny {
    padding-right: 3.75rem; }
    .split.button.tiny span {
      width: 2.25rem; }
      .split.button.tiny span:after {
        border-top-style: solid;
        border-width: 0.375rem;
        top: 48%;
        margin-left: -0.375rem; }
  .split.button.small {
    padding-right: 4.375rem; }
    .split.button.small span {
      width: 2.625rem; }
      .split.button.small span:after {
        border-top-style: solid;
        border-width: 0.4375rem;
        top: 48%;
        margin-left: -0.375rem; }
  .split.button.large {
    padding-right: 5.5rem; }
    .split.button.large span {
      width: 3.4375rem; }
      .split.button.large span:after {
        border-top-style: solid;
        border-width: 0.3125rem;
        top: 48%;
        margin-left: -0.375rem; }
  .split.button.expand {
    padding-left: 2rem; }
  .split.button.secondary span:after {
    border-color: #333333 transparent transparent transparent; }
  .split.button.radius span {
    -webkit-border-bottom-right-radius: 3px;
    -webkit-border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px; }
  .split.button.round span {
    -webkit-border-bottom-right-radius: 1000px;
    -webkit-border-top-right-radius: 1000px;
    border-bottom-right-radius: 1000px;
    border-top-right-radius: 1000px; }

.reveal-modal-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1004;
  display: none;
  left: 0; }

.reveal-modal, dialog {
  visibility: hidden;
  display: none;
  position: absolute;
  z-index: 1005;
  width: 100vw;
  top: 0;
  border-radius: 3px;
  left: 0;
  background-color: white;
  padding: 1.25rem;
  border: solid 1px #666666;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 1.875rem; }
  @media only screen and (max-width: 40em) {
    .reveal-modal, dialog {
      min-height: 100vh; } }
  .reveal-modal .column, dialog .column, .reveal-modal .columns, dialog .columns {
    min-width: 0; }
  .reveal-modal > :first-child, dialog > :first-child {
    margin-top: 0; }
  .reveal-modal > :last-child, dialog > :last-child {
    margin-bottom: 0; }
  @media only screen and (min-width: 40.063em) {
    .reveal-modal, dialog {
      width: 80%;
      max-width: 62.5rem;
      left: 0;
      right: 0;
      margin: 0 auto; } }
  @media only screen and (min-width: 40.063em) {
    .reveal-modal, dialog {
      top: 6.25rem; } }
  .reveal-modal.radius, dialog.radius {
    border-radius: 3px; }
  .reveal-modal.round, dialog.round {
    border-radius: 1000px; }
  .reveal-modal.collapse, dialog.collapse {
    padding: 0; }
  @media only screen and (min-width: 40.063em) {
    .reveal-modal.tiny, dialog.tiny {
      width: 30%;
      max-width: 62.5rem;
      left: 0;
      right: 0;
      margin: 0 auto; } }
  @media only screen and (min-width: 40.063em) {
    .reveal-modal.small, dialog.small {
      width: 40%;
      max-width: 62.5rem;
      left: 0;
      right: 0;
      margin: 0 auto; } }
  @media only screen and (min-width: 40.063em) {
    .reveal-modal.medium, dialog.medium {
      width: 60%;
      max-width: 62.5rem;
      left: 0;
      right: 0;
      margin: 0 auto; } }
  @media only screen and (min-width: 40.063em) {
    .reveal-modal.large, dialog.large {
      width: 70%;
      max-width: 62.5rem;
      left: 0;
      right: 0;
      margin: 0 auto; } }
  @media only screen and (min-width: 40.063em) {
    .reveal-modal.xlarge, dialog.xlarge {
      width: 95%;
      max-width: 62.5rem;
      left: 0;
      right: 0;
      margin: 0 auto; } }
  .reveal-modal.full, dialog.full {
    top: 0;
    left: 0;
    height: 100%;
    height: 100vh;
    min-height: 100vh;
    max-width: none !important;
    margin-left: 0 !important; }
    @media only screen and (min-width: 40.063em) {
      .reveal-modal.full, dialog.full {
        width: 100vw;
        max-width: 62.5rem;
        left: 0;
        right: 0;
        margin: 0 auto; } }
  .reveal-modal .close-reveal-modal, dialog .close-reveal-modal {
    font-size: 2.5rem;
    line-height: 1;
    position: absolute;
    top: 0.5rem;
    right: 0.6875rem;
    color: #aaaaaa;
    font-weight: bold;
    cursor: pointer; }

dialog {
  display: none; }
  dialog::backdrop, dialog + .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    background: rgba(0, 0, 0, 0.45);
    z-index: auto;
    display: none;
    left: 0; }
  dialog[open] {
    display: block; }

@media print {
  dialog, .reveal-modal, dialog {
    display: none;
    background: white !important; } }
/* Tooltips */
.has-tip {
  border-bottom: dotted 1px #cccccc;
  cursor: help;
  font-weight: bold;
  color: #333333; }
  .has-tip:hover, .has-tip:focus {
    border-bottom: dotted 1px #003f54;
    color: #008cba; }
  .has-tip.tip-left, .has-tip.tip-right {
    float: none !important; }

.tooltip {
  display: none;
  position: absolute;
  z-index: 1006;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.3;
  padding: 0.75rem;
  max-width: 300px;
  left: 50%;
  width: 100%;
  color: white;
  background: #333333; }
  .tooltip > .nub {
    display: block;
    left: 5px;
    position: absolute;
    width: 0;
    height: 0;
    border: solid 5px;
    border-color: transparent transparent #333333 transparent;
    top: -10px;
    pointer-events: none; }
    .tooltip > .nub.rtl {
      left: auto;
      right: 5px; }
  .tooltip.radius {
    border-radius: 3px; }
  .tooltip.round {
    border-radius: 1000px; }
    .tooltip.round > .nub {
      left: 2rem; }
  .tooltip.opened {
    color: #008cba !important;
    border-bottom: dotted 1px #003f54 !important; }

.tap-to-close {
  display: block;
  font-size: 0.625rem;
  color: #777777;
  font-weight: normal; }

@media only screen and (min-width: 40.063em) {
  .tooltip > .nub {
    border-color: transparent transparent #333333 transparent;
    top: -10px; }
  .tooltip.tip-top > .nub {
    border-color: #333333 transparent transparent transparent;
    top: auto;
    bottom: -10px; }
  .tooltip.tip-left, .tooltip.tip-right {
    float: none !important; }
  .tooltip.tip-left > .nub {
    border-color: transparent transparent transparent #333333;
    right: -10px;
    left: auto;
    top: 50%;
    margin-top: -5px; }
  .tooltip.tip-right > .nub {
    border-color: transparent #333333 transparent transparent;
    right: auto;
    left: -10px;
    top: 50%;
    margin-top: -5px; } }
/* Clearing Styles */
.clearing-thumbs, [data-clearing] {
  margin-bottom: 0;
  margin-left: 0;
  list-style: none; }
  .clearing-thumbs:before, .clearing-thumbs:after, [data-clearing]:before, [data-clearing]:after {
    content: " ";
    display: table; }
  .clearing-thumbs:after, [data-clearing]:after {
    clear: both; }
  .clearing-thumbs li, [data-clearing] li {
    float: left;
    margin-right: 10px; }
  .clearing-thumbs[class*="block-grid-"] li, [data-clearing][class*="block-grid-"] li {
    margin-right: 0; }

.clearing-blackout {
  background: #333333;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 998; }
  .clearing-blackout .clearing-close {
    display: block; }

.clearing-container {
  position: relative;
  z-index: 998;
  height: 100%;
  overflow: hidden;
  margin: 0; }

.clearing-touch-label {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #aaaaaa;
  font-size: 0.6em; }

.visible-img {
  height: 95%;
  position: relative; }
  .visible-img img {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50%;
    max-height: 100%;
    max-width: 100%; }

.clearing-caption {
  color: #cccccc;
  font-size: 0.875em;
  line-height: 1.3;
  margin-bottom: 0;
  text-align: center;
  bottom: 0;
  background: #333333;
  width: 100%;
  padding: 10px 30px 20px;
  position: absolute;
  left: 0; }

.clearing-close {
  z-index: 999;
  padding-left: 20px;
  padding-top: 10px;
  font-size: 30px;
  line-height: 1;
  color: #cccccc;
  display: none; }
  .clearing-close:hover, .clearing-close:focus {
    color: #cccccc; }

.clearing-assembled .clearing-container {
  height: 100%; }
  .clearing-assembled .clearing-container .carousel > ul {
    display: none; }

.clearing-feature li {
  display: none; }
  .clearing-feature li.clearing-featured-img {
    display: block; }

@media only screen and (min-width: 40.063em) {
  .clearing-main-prev,
  .clearing-main-next {
    position: absolute;
    height: 100%;
    width: 40px;
    top: 0; }
    .clearing-main-prev > span,
    .clearing-main-next > span {
      position: absolute;
      top: 50%;
      display: block;
      width: 0;
      height: 0;
      border: solid 12px; }
      .clearing-main-prev > span:hover,
      .clearing-main-next > span:hover {
        opacity: 0.8; }

  .clearing-main-prev {
    left: 0; }
    .clearing-main-prev > span {
      left: 5px;
      border-color: transparent;
      border-right-color: #cccccc; }

  .clearing-main-next {
    right: 0; }
    .clearing-main-next > span {
      border-color: transparent;
      border-left-color: #cccccc; }

  .clearing-main-prev.disabled,
  .clearing-main-next.disabled {
    opacity: 0.3; }

  .clearing-assembled .clearing-container .carousel {
    background: rgba(51, 51, 51, 0.8);
    height: 120px;
    margin-top: 10px;
    text-align: center; }
    .clearing-assembled .clearing-container .carousel > ul {
      display: inline-block;
      z-index: 999;
      height: 100%;
      position: relative;
      float: none; }
      .clearing-assembled .clearing-container .carousel > ul li {
        display: block;
        width: 120px;
        min-height: inherit;
        float: left;
        overflow: hidden;
        margin-right: 0;
        padding: 0;
        position: relative;
        cursor: pointer;
        opacity: 0.4;
        clear: none; }
        .clearing-assembled .clearing-container .carousel > ul li.fix-height img {
          height: 100%;
          max-width: none; }
        .clearing-assembled .clearing-container .carousel > ul li a.th {
          border: none;
          box-shadow: none;
          display: block; }
        .clearing-assembled .clearing-container .carousel > ul li img {
          cursor: pointer !important;
          width: 100% !important; }
        .clearing-assembled .clearing-container .carousel > ul li.visible {
          opacity: 1; }
        .clearing-assembled .clearing-container .carousel > ul li:hover {
          opacity: 0.8; }
  .clearing-assembled .clearing-container .visible-img {
    background: #333333;
    overflow: hidden;
    height: 85%; }

  .clearing-close {
    position: absolute;
    top: 10px;
    right: 20px;
    padding-left: 0;
    padding-top: 0; } }
/* Progress Bar */
.progress {
  background-color: #f6f6f6;
  height: 1.5625rem;
  border: 1px solid white;
  padding: 0.125rem;
  margin-bottom: 0.625rem; }
  .progress .meter {
    background: #008cba;
    height: 100%;
    display: block; }
  .progress.secondary .meter {
    background: #e7e7e7;
    height: 100%;
    display: block; }
  .progress.success .meter {
    background: #43ac6a;
    height: 100%;
    display: block; }
  .progress.alert .meter {
    background: #f04124;
    height: 100%;
    display: block; }
  .progress.radius {
    border-radius: 3px; }
    .progress.radius .meter {
      border-radius: 2px; }
  .progress.round {
    border-radius: 1000px; }
    .progress.round .meter {
      border-radius: 999px; }

.sub-nav {
  display: block;
  width: auto;
  overflow: hidden;
  margin-bottom: -0.25rem 0 1.125rem;
  padding-top: 0.25rem; }
  .sub-nav dt {
    text-transform: uppercase; }
  .sub-nav dt,
  .sub-nav dd,
  .sub-nav li {
    float: left;
    display: inline;
    margin-left: 1rem;
    margin-bottom: 0;
    font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    font-weight: normal;
    font-size: 0.875rem;
    color: #999999; }
    .sub-nav dt a,
    .sub-nav dd a,
    .sub-nav li a {
      text-decoration: none;
      color: #999999;
      padding: 0.1875rem 1rem; }
      .sub-nav dt a:hover,
      .sub-nav dd a:hover,
      .sub-nav li a:hover {
        color: #737373; }
    .sub-nav dt.active a,
    .sub-nav dd.active a,
    .sub-nav li.active a {
      border-radius: 3px;
      font-weight: normal;
      background: #008cba;
      padding: 0.1875rem 1rem;
      cursor: default;
      color: white; }
      .sub-nav dt.active a:hover,
      .sub-nav dd.active a:hover,
      .sub-nav li.active a:hover {
        background: #0078a0; }

/* Foundation Joyride */
.joyride-list {
  display: none; }

/* Default styles for the container */
.joyride-tip-guide {
  display: none;
  position: absolute;
  background: #333333;
  color: white;
  z-index: 101;
  top: 0;
  left: 2.5%;
  font-family: inherit;
  font-weight: normal;
  width: 95%; }

.lt-ie9 .joyride-tip-guide {
  max-width: 800px;
  left: 50%;
  margin-left: -400px; }

.joyride-content-wrapper {
  width: 100%;
  padding: 1.125rem 1.25rem 1.5rem; }
  .joyride-content-wrapper .button {
    margin-bottom: 0 !important; }
  .joyride-content-wrapper .joyride-prev-tip {
    margin-right: 10px; }

/* Add a little css triangle pip, older browser just miss out on the fanciness of it */
.joyride-tip-guide .joyride-nub {
  display: block;
  position: absolute;
  left: 22px;
  width: 0;
  height: 0;
  border: 10px solid #333333; }
  .joyride-tip-guide .joyride-nub.top {
    border-top-style: solid;
    border-color: #333333;
    border-top-color: transparent !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    top: -20px; }
  .joyride-tip-guide .joyride-nub.bottom {
    border-bottom-style: solid;
    border-color: #333333 !important;
    border-bottom-color: transparent !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    bottom: -20px; }
  .joyride-tip-guide .joyride-nub.right {
    right: -20px; }
  .joyride-tip-guide .joyride-nub.left {
    left: -20px; }

/* Typography */
.joyride-tip-guide h1,
.joyride-tip-guide h2,
.joyride-tip-guide h3,
.joyride-tip-guide h4,
.joyride-tip-guide h5,
.joyride-tip-guide h6 {
  line-height: 1.25;
  margin: 0;
  font-weight: bold;
  color: white; }

.joyride-tip-guide p {
  margin: 0 0 1.125rem 0;
  font-size: 0.875rem;
  line-height: 1.3; }

.joyride-timer-indicator-wrap {
  width: 50px;
  height: 3px;
  border: solid 1px #555555;
  position: absolute;
  right: 1.0625rem;
  bottom: 1rem; }

.joyride-timer-indicator {
  display: block;
  width: 0;
  height: inherit;
  background: #666666; }

.joyride-close-tip {
  position: absolute;
  right: 12px;
  top: 10px;
  color: #777777 !important;
  text-decoration: none;
  font-size: 24px;
  font-weight: normal;
  line-height: .5 !important; }
  .joyride-close-tip:hover, .joyride-close-tip:focus {
    color: #eeeeee !important; }

.joyride-modal-bg {
  position: fixed;
  height: 100%;
  width: 100%;
  background: transparent;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: none;
  top: 0;
  left: 0;
  cursor: pointer; }

.joyride-expose-wrapper {
  background-color: white;
  position: absolute;
  border-radius: 3px;
  z-index: 102;
  box-shadow: 0 0 15px white; }

.joyride-expose-cover {
  background: transparent;
  border-radius: 3px;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0; }

/* Styles for screens that are at least 768px; */
@media only screen and (min-width: 40.063em) {
  .joyride-tip-guide {
    width: 300px;
    left: inherit; }
    .joyride-tip-guide .joyride-nub.bottom {
      border-color: #333333 !important;
      border-bottom-color: transparent !important;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      bottom: -20px; }
    .joyride-tip-guide .joyride-nub.right {
      border-color: #333333 !important;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      top: 22px;
      left: auto;
      right: -20px; }
    .joyride-tip-guide .joyride-nub.left {
      border-color: #333333 !important;
      border-top-color: transparent !important;
      border-left-color: transparent !important;
      border-bottom-color: transparent !important;
      top: 22px;
      left: -20px;
      right: auto; } }
.label {
  font-weight: normal;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
  text-align: center;
  text-decoration: none;
  line-height: 1;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  margin-bottom: inherit;
  padding: 0.25rem 0.5rem 0.25rem;
  font-size: 0.6875rem;
  background-color: #008cba;
  color: white; }
  .label.radius {
    border-radius: 3px; }
  .label.round {
    border-radius: 1000px; }
  .label.alert {
    background-color: #f04124;
    color: white; }
  .label.warning {
    background-color: #f08a24;
    color: white; }
  .label.success {
    background-color: #43ac6a;
    color: white; }
  .label.secondary {
    background-color: #e7e7e7;
    color: #333333; }
  .label.info {
    background-color: #a0d3e8;
    color: #333333; }

.off-canvas-wrap {
  -webkit-backface-visibility: hidden;
  position: relative;
  width: 100%;
  overflow: hidden; }
  .off-canvas-wrap.move-right, .off-canvas-wrap.move-left {
    min-height: 100%;
    -webkit-overflow-scrolling: touch; }

.inner-wrap {
  -webkit-backface-visibility: hidden;
  position: relative;
  width: 100%;
  -webkit-transition: -webkit-transform 500ms ease;
  -moz-transition: -moz-transform 500ms ease;
  -ms-transition: -ms-transform 500ms ease;
  -o-transition: -o-transform 500ms ease;
  transition: transform 500ms ease; }
  .inner-wrap:before, .inner-wrap:after {
    content: " ";
    display: table; }
  .inner-wrap:after {
    clear: both; }

.tab-bar {
  -webkit-backface-visibility: hidden;
  background: #333333;
  color: white;
  height: 2.8125rem;
  line-height: 2.8125rem;
  position: relative; }
  .tab-bar h1, .tab-bar h2, .tab-bar h3, .tab-bar h4, .tab-bar h5, .tab-bar h6 {
    color: white;
    font-weight: bold;
    line-height: 2.8125rem;
    margin: 0; }
  .tab-bar h1, .tab-bar h2, .tab-bar h3, .tab-bar h4 {
    font-size: 1.125rem; }

.left-small {
  width: 2.8125rem;
  height: 2.8125rem;
  position: absolute;
  top: 0;
  border-right: solid 1px #1a1a1a;
  left: 0; }

.right-small {
  width: 2.8125rem;
  height: 2.8125rem;
  position: absolute;
  top: 0;
  border-left: solid 1px #1a1a1a;
  right: 0; }

.tab-bar-section {
  padding: 0 0.625rem;
  position: absolute;
  text-align: center;
  height: 2.8125rem;
  top: 0; }
  @media only screen and (min-width: 40.063em) {
    .tab-bar-section.left, .tab-bar-section.right {
      text-align: left; } }
  .tab-bar-section.left {
    left: 0;
    right: 2.8125rem; }
  .tab-bar-section.right {
    left: 2.8125rem;
    right: 0; }
  .tab-bar-section.middle {
    left: 2.8125rem;
    right: 2.8125rem; }

.tab-bar .menu-icon {
  text-indent: 2.1875rem;
  width: 2.8125rem;
  height: 2.8125rem;
  display: block;
  padding: 0;
  color: white;
  position: relative;
  transform: translate3d(0, 0, 0); }
  .tab-bar .menu-icon span::after {
    content: "";
    position: absolute;
    display: block;
    height: 0;
    top: 50%;
    margin-top: -0.5rem;
    left: 0.90625rem;
    box-shadow: 0 0px 0 1px white, 0 7px 0 1px white, 0 14px 0 1px white;
    width: 1rem; }
  .tab-bar .menu-icon span:hover:after {
    box-shadow: 0 0px 0 1px #b3b3b3, 0 7px 0 1px #b3b3b3, 0 14px 0 1px #b3b3b3; }

.left-off-canvas-menu {
  -webkit-backface-visibility: hidden;
  width: 15.625rem;
  top: 0;
  bottom: 0;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  background: #333333;
  z-index: 1001;
  box-sizing: content-box;
  transition: transform 500ms ease 0s;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -ms-transform: translate(-100.5%, 0);
  -webkit-transform: translate3d(-100.5%, 0, 0);
  -moz-transform: translate3d(-100.5%, 0, 0);
  -ms-transform: translate3d(-100.5%, 0, 0);
  -o-transform: translate3d(-100.5%, 0, 0);
  transform: translate3d(-100.5%, 0, 0);
  left: 0; }
  .left-off-canvas-menu * {
    -webkit-backface-visibility: hidden; }

.right-off-canvas-menu {
  -webkit-backface-visibility: hidden;
  width: 15.625rem;
  top: 0;
  bottom: 0;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  background: #333333;
  z-index: 1001;
  box-sizing: content-box;
  transition: transform 500ms ease 0s;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -ms-transform: translate(100.5%, 0);
  -webkit-transform: translate3d(100.5%, 0, 0);
  -moz-transform: translate3d(100.5%, 0, 0);
  -ms-transform: translate3d(100.5%, 0, 0);
  -o-transform: translate3d(100.5%, 0, 0);
  transform: translate3d(100.5%, 0, 0);
  right: 0; }
  .right-off-canvas-menu * {
    -webkit-backface-visibility: hidden; }

ul.off-canvas-list {
  list-style-type: none;
  padding: 0;
  margin: 0; }
  ul.off-canvas-list li label {
    display: block;
    padding: 0.3rem 0.9375rem;
    color: #999999;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    background: #444444;
    border-top: 1px solid #5e5e5e;
    border-bottom: none;
    margin: 0; }
  ul.off-canvas-list li a {
    display: block;
    padding: 0.66667rem;
    color: rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid #262626;
    transition: background 300ms ease; }
    ul.off-canvas-list li a:hover {
      background: #242424; }

.move-right > .inner-wrap {
  -ms-transform: translate(15.625rem, 0);
  -webkit-transform: translate3d(15.625rem, 0, 0);
  -moz-transform: translate3d(15.625rem, 0, 0);
  -ms-transform: translate3d(15.625rem, 0, 0);
  -o-transform: translate3d(15.625rem, 0, 0);
  transform: translate3d(15.625rem, 0, 0); }
.move-right .exit-off-canvas {
  -webkit-backface-visibility: hidden;
  transition: background 300ms ease;
  cursor: pointer;
  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1002;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
  @media only screen and (min-width: 40.063em) {
    .move-right .exit-off-canvas:hover {
      background: rgba(255, 255, 255, 0.05); } }

.move-left > .inner-wrap {
  -ms-transform: translate(-15.625rem, 0);
  -webkit-transform: translate3d(-15.625rem, 0, 0);
  -moz-transform: translate3d(-15.625rem, 0, 0);
  -ms-transform: translate3d(-15.625rem, 0, 0);
  -o-transform: translate3d(-15.625rem, 0, 0);
  transform: translate3d(-15.625rem, 0, 0); }
.move-left .exit-off-canvas {
  -webkit-backface-visibility: hidden;
  transition: background 300ms ease;
  cursor: pointer;
  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1002;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
  @media only screen and (min-width: 40.063em) {
    .move-left .exit-off-canvas:hover {
      background: rgba(255, 255, 255, 0.05); } }

.offcanvas-overlap .left-off-canvas-menu, .offcanvas-overlap .right-off-canvas-menu {
  -ms-transform: none;
  -webkit-transform: none;
  -moz-transform: none;
  -o-transform: none;
  transform: none;
  z-index: 1003; }
.offcanvas-overlap .exit-off-canvas {
  -webkit-backface-visibility: hidden;
  transition: background 300ms ease;
  cursor: pointer;
  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1002;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
  @media only screen and (min-width: 40.063em) {
    .offcanvas-overlap .exit-off-canvas:hover {
      background: rgba(255, 255, 255, 0.05); } }

.offcanvas-overlap-left .right-off-canvas-menu {
  -ms-transform: none;
  -webkit-transform: none;
  -moz-transform: none;
  -o-transform: none;
  transform: none;
  z-index: 1003; }
.offcanvas-overlap-left .exit-off-canvas {
  -webkit-backface-visibility: hidden;
  transition: background 300ms ease;
  cursor: pointer;
  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1002;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
  @media only screen and (min-width: 40.063em) {
    .offcanvas-overlap-left .exit-off-canvas:hover {
      background: rgba(255, 255, 255, 0.05); } }

.offcanvas-overlap-right .left-off-canvas-menu {
  -ms-transform: none;
  -webkit-transform: none;
  -moz-transform: none;
  -o-transform: none;
  transform: none;
  z-index: 1003; }
.offcanvas-overlap-right .exit-off-canvas {
  -webkit-backface-visibility: hidden;
  transition: background 300ms ease;
  cursor: pointer;
  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1002;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
  @media only screen and (min-width: 40.063em) {
    .offcanvas-overlap-right .exit-off-canvas:hover {
      background: rgba(255, 255, 255, 0.05); } }

.no-csstransforms .left-off-canvas-menu {
  left: -15.625rem; }
.no-csstransforms .right-off-canvas-menu {
  right: -15.625rem; }
.no-csstransforms .move-left > .inner-wrap {
  right: 15.625rem; }
.no-csstransforms .move-right > .inner-wrap {
  left: 15.625rem; }

.left-submenu {
  -webkit-backface-visibility: hidden;
  width: 15.625rem;
  top: 0;
  bottom: 0;
  position: absolute;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #333333;
  z-index: 1002;
  box-sizing: content-box;
  -webkit-overflow-scrolling: touch;
  -ms-transform: translate(-100%, 0);
  -webkit-transform: translate3d(-100%, 0, 0);
  -moz-transform: translate3d(-100%, 0, 0);
  -ms-transform: translate3d(-100%, 0, 0);
  -o-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  left: 0;
  -webkit-transition: -webkit-transform 500ms ease;
  -moz-transition: -moz-transform 500ms ease;
  -ms-transition: -ms-transform 500ms ease;
  -o-transition: -o-transform 500ms ease;
  transition: transform 500ms ease; }
  .left-submenu * {
    -webkit-backface-visibility: hidden; }
  .left-submenu .back > a {
    padding: 0.3rem 0.9375rem;
    color: #999999;
    text-transform: uppercase;
    font-weight: bold;
    background: #444444;
    border-top: 1px solid #5e5e5e;
    border-bottom: none;
    margin: 0; }
    .left-submenu .back > a:hover {
      background: #303030;
      border-top: 1px solid #5e5e5e;
      border-bottom: none; }
    .left-submenu .back > a:before {
      content: "\AB";
      margin-right: 0.5rem;
      display: inline; }
  .left-submenu.move-right {
    -ms-transform: translate(0%, 0);
    -webkit-transform: translate3d(0%, 0, 0);
    -moz-transform: translate3d(0%, 0, 0);
    -ms-transform: translate3d(0%, 0, 0);
    -o-transform: translate3d(0%, 0, 0);
    transform: translate3d(0%, 0, 0); }

.right-submenu {
  -webkit-backface-visibility: hidden;
  width: 15.625rem;
  top: 0;
  bottom: 0;
  position: absolute;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #333333;
  z-index: 1002;
  box-sizing: content-box;
  -webkit-overflow-scrolling: touch;
  -ms-transform: translate(100%, 0);
  -webkit-transform: translate3d(100%, 0, 0);
  -moz-transform: translate3d(100%, 0, 0);
  -ms-transform: translate3d(100%, 0, 0);
  -o-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  right: 0;
  -webkit-transition: -webkit-transform 500ms ease;
  -moz-transition: -moz-transform 500ms ease;
  -ms-transition: -ms-transform 500ms ease;
  -o-transition: -o-transform 500ms ease;
  transition: transform 500ms ease; }
  .right-submenu * {
    -webkit-backface-visibility: hidden; }
  .right-submenu .back > a {
    padding: 0.3rem 0.9375rem;
    color: #999999;
    text-transform: uppercase;
    font-weight: bold;
    background: #444444;
    border-top: 1px solid #5e5e5e;
    border-bottom: none;
    margin: 0; }
    .right-submenu .back > a:hover {
      background: #303030;
      border-top: 1px solid #5e5e5e;
      border-bottom: none; }
    .right-submenu .back > a:after {
      content: "\BB";
      margin-left: 0.5rem;
      display: inline; }
  .right-submenu.move-left {
    -ms-transform: translate(0%, 0);
    -webkit-transform: translate3d(0%, 0, 0);
    -moz-transform: translate3d(0%, 0, 0);
    -ms-transform: translate3d(0%, 0, 0);
    -o-transform: translate3d(0%, 0, 0);
    transform: translate3d(0%, 0, 0); }

.left-off-canvas-menu ul.off-canvas-list li.has-submenu > a:after {
  content: "\BB";
  margin-left: 0.5rem;
  display: inline; }

.right-off-canvas-menu ul.off-canvas-list li.has-submenu > a:before {
  content: "\AB";
  margin-right: 0.5rem;
  display: inline; }

/* Foundation Dropdowns */
.f-dropdown {
  position: absolute;
  left: -9999px;
  list-style: none;
  margin-left: 0;
  outline: none;
  width: 100%;
  max-height: none;
  height: auto;
  background: white;
  border: solid 1px #cccccc;
  font-size: 0.875rem;
  z-index: 89;
  margin-top: 2px;
  max-width: 200px; }
  .f-dropdown > *:first-child {
    margin-top: 0; }
  .f-dropdown > *:last-child {
    margin-bottom: 0; }
  .f-dropdown:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: inset 6px;
    border-color: transparent transparent white transparent;
    border-bottom-style: solid;
    position: absolute;
    top: -12px;
    left: 10px;
    z-index: 89; }
  .f-dropdown:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: inset 7px;
    border-color: transparent transparent #cccccc transparent;
    border-bottom-style: solid;
    position: absolute;
    top: -14px;
    left: 9px;
    z-index: 88; }
  .f-dropdown.right:before {
    left: auto;
    right: 10px; }
  .f-dropdown.right:after {
    left: auto;
    right: 9px; }
  .f-dropdown.drop-right {
    position: absolute;
    left: -9999px;
    list-style: none;
    margin-left: 0;
    outline: none;
    width: 100%;
    max-height: none;
    height: auto;
    background: white;
    border: solid 1px #cccccc;
    font-size: 0.875rem;
    z-index: 89;
    margin-top: 0;
    margin-left: 2px;
    max-width: 200px; }
    .f-dropdown.drop-right > *:first-child {
      margin-top: 0; }
    .f-dropdown.drop-right > *:last-child {
      margin-bottom: 0; }
    .f-dropdown.drop-right:before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: inset 6px;
      border-color: transparent white transparent transparent;
      border-right-style: solid;
      position: absolute;
      top: 10px;
      left: -12px;
      z-index: 89; }
    .f-dropdown.drop-right:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: inset 7px;
      border-color: transparent #cccccc transparent transparent;
      border-right-style: solid;
      position: absolute;
      top: 9px;
      left: -14px;
      z-index: 88; }
  .f-dropdown.drop-left {
    position: absolute;
    left: -9999px;
    list-style: none;
    margin-left: 0;
    outline: none;
    width: 100%;
    max-height: none;
    height: auto;
    background: white;
    border: solid 1px #cccccc;
    font-size: 0.875rem;
    z-index: 89;
    margin-top: 0;
    margin-left: -2px;
    max-width: 200px; }
    .f-dropdown.drop-left > *:first-child {
      margin-top: 0; }
    .f-dropdown.drop-left > *:last-child {
      margin-bottom: 0; }
    .f-dropdown.drop-left:before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: inset 6px;
      border-color: transparent transparent transparent white;
      border-left-style: solid;
      position: absolute;
      top: 10px;
      right: -12px;
      left: auto;
      z-index: 89; }
    .f-dropdown.drop-left:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: inset 7px;
      border-color: transparent transparent transparent #cccccc;
      border-left-style: solid;
      position: absolute;
      top: 9px;
      right: -14px;
      left: auto;
      z-index: 88; }
  .f-dropdown.drop-top {
    position: absolute;
    left: -9999px;
    list-style: none;
    margin-left: 0;
    outline: none;
    width: 100%;
    max-height: none;
    height: auto;
    background: white;
    border: solid 1px #cccccc;
    font-size: 0.875rem;
    z-index: 89;
    margin-top: -2px;
    margin-left: 0;
    max-width: 200px; }
    .f-dropdown.drop-top > *:first-child {
      margin-top: 0; }
    .f-dropdown.drop-top > *:last-child {
      margin-bottom: 0; }
    .f-dropdown.drop-top:before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: inset 6px;
      border-color: white transparent transparent transparent;
      border-top-style: solid;
      position: absolute;
      top: auto;
      bottom: -12px;
      left: 10px;
      right: auto;
      z-index: 89; }
    .f-dropdown.drop-top:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: inset 7px;
      border-color: #cccccc transparent transparent transparent;
      border-top-style: solid;
      position: absolute;
      top: auto;
      bottom: -14px;
      left: 9px;
      right: auto;
      z-index: 88; }
  .f-dropdown li {
    font-size: 0.875rem;
    cursor: pointer;
    line-height: 1.125rem;
    margin: 0; }
    .f-dropdown li:hover, .f-dropdown li:focus {
      background: #eeeeee; }
    .f-dropdown li.radius {
      border-radius: 3px; }
    .f-dropdown li a {
      display: block;
      padding: 0.5rem;
      color: #555555; }
  .f-dropdown.content {
    position: absolute;
    left: -9999px;
    list-style: none;
    margin-left: 0;
    outline: none;
    padding: 1.25rem;
    width: 100%;
    height: auto;
    max-height: none;
    background: white;
    border: solid 1px #cccccc;
    font-size: 0.875rem;
    z-index: 89;
    max-width: 200px; }
    .f-dropdown.content > *:first-child {
      margin-top: 0; }
    .f-dropdown.content > *:last-child {
      margin-bottom: 0; }
  .f-dropdown.tiny {
    max-width: 200px; }
  .f-dropdown.small {
    max-width: 300px; }
  .f-dropdown.medium {
    max-width: 500px; }
  .f-dropdown.large {
    max-width: 800px; }
  .f-dropdown.mega {
    width: 100% !important;
    max-width: 100% !important; }
    .f-dropdown.mega.open {
      left: 0 !important; }

table {
  background: white;
  margin-bottom: 1.25rem;
  border: solid 1px #dddddd;
  table-layout: auto; }
  table caption {
    background: transparent;
    color: #222222;
    font-size: 1rem;
    font-weight: bold; }
  table thead {
    background: whitesmoke; }
    table thead tr th,
    table thead tr td {
      padding: 0.5rem 0.625rem 0.625rem;
      font-size: 0.875rem;
      font-weight: bold;
      color: #222222; }
  table tfoot {
    background: whitesmoke; }
    table tfoot tr th,
    table tfoot tr td {
      padding: 0.5rem 0.625rem 0.625rem;
      font-size: 0.875rem;
      font-weight: bold;
      color: #222222; }
  table tr th,
  table tr td {
    padding: 0.5625rem 0.625rem;
    font-size: 0.875rem;
    color: #222222;
    text-align: left; }
  table tr.even, table tr.alt, table tr:nth-of-type(even) {
    background: #f9f9f9; }
  table thead tr th,
  table tfoot tr th,
  table tfoot tr td,
  table tbody tr th,
  table tbody tr td,
  table tr td {
    display: table-cell;
    line-height: 1.125rem; }

.range-slider {
  display: block;
  position: relative;
  width: 100%;
  height: 1rem;
  border: 1px solid #dddddd;
  margin: 1.25rem 0;
  -ms-touch-action: none;
  touch-action: none;
  background: #fafafa; }
  .range-slider.vertical-range {
    display: block;
    position: relative;
    width: 100%;
    height: 1rem;
    border: 1px solid #dddddd;
    margin: 1.25rem 0;
    -ms-touch-action: none;
    touch-action: none;
    display: inline-block;
    width: 1rem;
    height: 12.5rem; }
    .range-slider.vertical-range .range-slider-handle {
      margin-top: 0;
      margin-left: -0.5rem;
      position: absolute;
      bottom: -10.5rem; }
    .range-slider.vertical-range .range-slider-active-segment {
      width: 0.875rem;
      height: auto;
      bottom: 0; }
  .range-slider.radius {
    background: #fafafa;
    border-radius: 3px; }
    .range-slider.radius .range-slider-handle {
      background: #008cba;
      border-radius: 3px; }
      .range-slider.radius .range-slider-handle:hover {
        background: #007ba4; }
  .range-slider.round {
    background: #fafafa;
    border-radius: 1000px; }
    .range-slider.round .range-slider-handle {
      background: #008cba;
      border-radius: 1000px; }
      .range-slider.round .range-slider-handle:hover {
        background: #007ba4; }
  .range-slider.disabled, .range-slider[disabled] {
    background: #fafafa;
    cursor: default;
    opacity: 0.7; }
    .range-slider.disabled .range-slider-handle, .range-slider[disabled] .range-slider-handle {
      background: #008cba;
      cursor: default;
      opacity: 0.7; }
      .range-slider.disabled .range-slider-handle:hover, .range-slider[disabled] .range-slider-handle:hover {
        background: #007ba4; }

.range-slider-active-segment {
  display: inline-block;
  position: absolute;
  height: 0.875rem;
  background: #e5e5e5; }

.range-slider-handle {
  display: inline-block;
  position: absolute;
  z-index: 1;
  top: -0.3125rem;
  width: 2rem;
  height: 1.375rem;
  border: 1px solid none;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  background: #008cba; }
  .range-slider-handle:hover {
    background: #007ba4; }

[class*="block-grid-"] {
  display: block;
  padding: 0;
  margin: 0 -0.625rem; }
  [class*="block-grid-"]:before, [class*="block-grid-"]:after {
    content: " ";
    display: table; }
  [class*="block-grid-"]:after {
    clear: both; }
  [class*="block-grid-"] > li {
    display: block;
    height: auto;
    float: left;
    padding: 0 0.625rem 1.25rem; }

@media only screen {
  .small-block-grid-1 > li {
    width: 100%;
    list-style: none; }
    .small-block-grid-1 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-1 > li:nth-of-type(1n+1) {
      clear: both; }

  .small-block-grid-2 > li {
    width: 50%;
    list-style: none; }
    .small-block-grid-2 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-2 > li:nth-of-type(2n+1) {
      clear: both; }

  .small-block-grid-3 > li {
    width: 33.33333%;
    list-style: none; }
    .small-block-grid-3 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-3 > li:nth-of-type(3n+1) {
      clear: both; }

  .small-block-grid-4 > li {
    width: 25%;
    list-style: none; }
    .small-block-grid-4 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-4 > li:nth-of-type(4n+1) {
      clear: both; }

  .small-block-grid-5 > li {
    width: 20%;
    list-style: none; }
    .small-block-grid-5 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-5 > li:nth-of-type(5n+1) {
      clear: both; }

  .small-block-grid-6 > li {
    width: 16.66667%;
    list-style: none; }
    .small-block-grid-6 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-6 > li:nth-of-type(6n+1) {
      clear: both; }

  .small-block-grid-7 > li {
    width: 14.28571%;
    list-style: none; }
    .small-block-grid-7 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-7 > li:nth-of-type(7n+1) {
      clear: both; }

  .small-block-grid-8 > li {
    width: 12.5%;
    list-style: none; }
    .small-block-grid-8 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-8 > li:nth-of-type(8n+1) {
      clear: both; }

  .small-block-grid-9 > li {
    width: 11.11111%;
    list-style: none; }
    .small-block-grid-9 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-9 > li:nth-of-type(9n+1) {
      clear: both; }

  .small-block-grid-10 > li {
    width: 10%;
    list-style: none; }
    .small-block-grid-10 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-10 > li:nth-of-type(10n+1) {
      clear: both; }

  .small-block-grid-11 > li {
    width: 9.09091%;
    list-style: none; }
    .small-block-grid-11 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-11 > li:nth-of-type(11n+1) {
      clear: both; }

  .small-block-grid-12 > li {
    width: 8.33333%;
    list-style: none; }
    .small-block-grid-12 > li:nth-of-type(1n) {
      clear: none; }
    .small-block-grid-12 > li:nth-of-type(12n+1) {
      clear: both; } }
@media only screen and (min-width: 40.063em) {
  .medium-block-grid-1 > li {
    width: 100%;
    list-style: none; }
    .medium-block-grid-1 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-1 > li:nth-of-type(1n+1) {
      clear: both; }

  .medium-block-grid-2 > li {
    width: 50%;
    list-style: none; }
    .medium-block-grid-2 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-2 > li:nth-of-type(2n+1) {
      clear: both; }

  .medium-block-grid-3 > li {
    width: 33.33333%;
    list-style: none; }
    .medium-block-grid-3 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-3 > li:nth-of-type(3n+1) {
      clear: both; }

  .medium-block-grid-4 > li {
    width: 25%;
    list-style: none; }
    .medium-block-grid-4 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-4 > li:nth-of-type(4n+1) {
      clear: both; }

  .medium-block-grid-5 > li {
    width: 20%;
    list-style: none; }
    .medium-block-grid-5 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-5 > li:nth-of-type(5n+1) {
      clear: both; }

  .medium-block-grid-6 > li {
    width: 16.66667%;
    list-style: none; }
    .medium-block-grid-6 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-6 > li:nth-of-type(6n+1) {
      clear: both; }

  .medium-block-grid-7 > li {
    width: 14.28571%;
    list-style: none; }
    .medium-block-grid-7 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-7 > li:nth-of-type(7n+1) {
      clear: both; }

  .medium-block-grid-8 > li {
    width: 12.5%;
    list-style: none; }
    .medium-block-grid-8 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-8 > li:nth-of-type(8n+1) {
      clear: both; }

  .medium-block-grid-9 > li {
    width: 11.11111%;
    list-style: none; }
    .medium-block-grid-9 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-9 > li:nth-of-type(9n+1) {
      clear: both; }

  .medium-block-grid-10 > li {
    width: 10%;
    list-style: none; }
    .medium-block-grid-10 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-10 > li:nth-of-type(10n+1) {
      clear: both; }

  .medium-block-grid-11 > li {
    width: 9.09091%;
    list-style: none; }
    .medium-block-grid-11 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-11 > li:nth-of-type(11n+1) {
      clear: both; }

  .medium-block-grid-12 > li {
    width: 8.33333%;
    list-style: none; }
    .medium-block-grid-12 > li:nth-of-type(1n) {
      clear: none; }
    .medium-block-grid-12 > li:nth-of-type(12n+1) {
      clear: both; } }
@media only screen and (min-width: 64.063em) {
  .large-block-grid-1 > li {
    width: 100%;
    list-style: none; }
    .large-block-grid-1 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-1 > li:nth-of-type(1n+1) {
      clear: both; }

  .large-block-grid-2 > li {
    width: 50%;
    list-style: none; }
    .large-block-grid-2 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-2 > li:nth-of-type(2n+1) {
      clear: both; }

  .large-block-grid-3 > li {
    width: 33.33333%;
    list-style: none; }
    .large-block-grid-3 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-3 > li:nth-of-type(3n+1) {
      clear: both; }

  .large-block-grid-4 > li {
    width: 25%;
    list-style: none; }
    .large-block-grid-4 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-4 > li:nth-of-type(4n+1) {
      clear: both; }

  .large-block-grid-5 > li {
    width: 20%;
    list-style: none; }
    .large-block-grid-5 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-5 > li:nth-of-type(5n+1) {
      clear: both; }

  .large-block-grid-6 > li {
    width: 16.66667%;
    list-style: none; }
    .large-block-grid-6 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-6 > li:nth-of-type(6n+1) {
      clear: both; }

  .large-block-grid-7 > li {
    width: 14.28571%;
    list-style: none; }
    .large-block-grid-7 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-7 > li:nth-of-type(7n+1) {
      clear: both; }

  .large-block-grid-8 > li {
    width: 12.5%;
    list-style: none; }
    .large-block-grid-8 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-8 > li:nth-of-type(8n+1) {
      clear: both; }

  .large-block-grid-9 > li {
    width: 11.11111%;
    list-style: none; }
    .large-block-grid-9 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-9 > li:nth-of-type(9n+1) {
      clear: both; }

  .large-block-grid-10 > li {
    width: 10%;
    list-style: none; }
    .large-block-grid-10 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-10 > li:nth-of-type(10n+1) {
      clear: both; }

  .large-block-grid-11 > li {
    width: 9.09091%;
    list-style: none; }
    .large-block-grid-11 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-11 > li:nth-of-type(11n+1) {
      clear: both; }

  .large-block-grid-12 > li {
    width: 8.33333%;
    list-style: none; }
    .large-block-grid-12 > li:nth-of-type(1n) {
      clear: none; }
    .large-block-grid-12 > li:nth-of-type(12n+1) {
      clear: both; } }
.flex-video {
  position: relative;
  padding-top: 1.5625rem;
  padding-bottom: 67.5%;
  height: 0;
  margin-bottom: 1rem;
  overflow: hidden; }
  .flex-video.widescreen {
    padding-bottom: 56.34%; }
  .flex-video.vimeo {
    padding-top: 0; }
  .flex-video iframe,
  .flex-video object,
  .flex-video embed,
  .flex-video video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; }

.keystroke,
kbd {
  background-color: #ededed;
  border-color: #dddddd;
  color: #222222;
  border-style: solid;
  border-width: 1px;
  margin: 0;
  font-family: "Consolas", "Menlo", "Courier", monospace;
  font-size: inherit;
  padding: 0.125rem 0.25rem 0;
  border-radius: 3px; }

.switch {
  padding: 0;
  border: none;
  position: relative;
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none; }
  .switch label {
    display: block;
    margin-bottom: 1rem;
    position: relative;
    color: transparent;
    background: #dddddd;
    text-indent: 100%;
    width: 4rem;
    height: 2rem;
    cursor: pointer;
    transition: left 0.15s ease-out; }
  .switch input {
    opacity: 0;
    position: absolute;
    top: 9px;
    left: 10px;
    padding: 0; }
    .switch input + label {
      margin-left: 0;
      margin-right: 0; }
  .switch label:after {
    content: "";
    display: block;
    background: white;
    position: absolute;
    top: .25rem;
    left: .25rem;
    width: 1.5rem;
    height: 1.5rem;
    -webkit-transition: left 0.15s ease-out;
    -moz-transition: left 0.15s ease-out;
    transition: left 0.15s ease-out;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0); }
  .switch input:checked + label {
    background: #008cba; }
  .switch input:checked + label:after {
    left: 2.25rem; }
  .switch label {
    width: 4rem;
    height: 2rem; }
  .switch label:after {
    width: 1.5rem;
    height: 1.5rem; }
  .switch input:checked + label:after {
    left: 2.25rem; }
  .switch label {
    color: transparent;
    background: #dddddd; }
  .switch label:after {
    background: white; }
  .switch input:checked + label {
    background: #008cba; }
  .switch.large label {
    width: 5rem;
    height: 2.5rem; }
  .switch.large label:after {
    width: 2rem;
    height: 2rem; }
  .switch.large input:checked + label:after {
    left: 2.75rem; }
  .switch.small label {
    width: 3.5rem;
    height: 1.75rem; }
  .switch.small label:after {
    width: 1.25rem;
    height: 1.25rem; }
  .switch.small input:checked + label:after {
    left: 2rem; }
  .switch.tiny label {
    width: 3rem;
    height: 1.5rem; }
  .switch.tiny label:after {
    width: 1rem;
    height: 1rem; }
  .switch.tiny input:checked + label:after {
    left: 1.75rem; }
  .switch.radius label {
    border-radius: 4px; }
  .switch.radius label:after {
    border-radius: 3px; }
  .switch.round {
    border-radius: 1000px; }
    .switch.round label {
      border-radius: 2rem; }
    .switch.round label:after {
      border-radius: 2rem; }

/* small displays */
@media only screen {
  .show-for-small-only, .show-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xxlarge-only, .hide-for-xxlarge-up {
    display: inherit !important; }

  .hide-for-small-only, .hide-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xxlarge-only, .show-for-xxlarge-up {
    display: none !important; }

  .visible-for-small-only, .visible-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up {
    position: static !important;
    height: auto;
    width: auto;
    overflow: visible;
    clip: auto; }

  .hidden-for-small-only, .hidden-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xxlarge-only, .visible-for-xxlarge-up {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px); }

  table.show-for-small-only, table.show-for-small-up, table.show-for-small, table.show-for-small-down, table.hide-for-medium-only, table.hide-for-medium-up, table.hide-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up {
    display: table !important; }

  thead.show-for-small-only, thead.show-for-small-up, thead.show-for-small, thead.show-for-small-down, thead.hide-for-medium-only, thead.hide-for-medium-up, thead.hide-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up {
    display: table-header-group !important; }

  tbody.show-for-small-only, tbody.show-for-small-up, tbody.show-for-small, tbody.show-for-small-down, tbody.hide-for-medium-only, tbody.hide-for-medium-up, tbody.hide-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up {
    display: table-row-group !important; }

  tr.show-for-small-only, tr.show-for-small-up, tr.show-for-small, tr.show-for-small-down, tr.hide-for-medium-only, tr.hide-for-medium-up, tr.hide-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up {
    display: table-row !important; }

  th.show-for-small-only, td.show-for-small-only, th.show-for-small-up, td.show-for-small-up, th.show-for-small, td.show-for-small, th.show-for-small-down, td.show-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.hide-for-medium-up, td.hide-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up {
    display: table-cell !important; } }
/* medium displays */
@media only screen and (min-width: 40.063em) {
  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xxlarge-only, .hide-for-xxlarge-up {
    display: inherit !important; }

  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xxlarge-only, .show-for-xxlarge-up {
    display: none !important; }

  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up {
    position: static !important;
    height: auto;
    width: auto;
    overflow: visible;
    clip: auto; }

  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xxlarge-only, .visible-for-xxlarge-up {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px); }

  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.show-for-medium-only, table.show-for-medium-up, table.show-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up {
    display: table !important; }

  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.show-for-medium-only, thead.show-for-medium-up, thead.show-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up {
    display: table-header-group !important; }

  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.show-for-medium-only, tbody.show-for-medium-up, tbody.show-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up {
    display: table-row-group !important; }

  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.show-for-medium-only, tr.show-for-medium-up, tr.show-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up {
    display: table-row !important; }

  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.show-for-medium-only, td.show-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.show-for-medium, td.show-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up {
    display: table-cell !important; } }
/* large displays */
@media only screen and (min-width: 64.063em) {
  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xxlarge-only, .hide-for-xxlarge-up {
    display: inherit !important; }

  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xxlarge-only, .show-for-xxlarge-up {
    display: none !important; }

  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up {
    position: static !important;
    height: auto;
    width: auto;
    overflow: visible;
    clip: auto; }

  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xxlarge-only, .visible-for-xxlarge-up {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px); }

  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.show-for-large-only, table.show-for-large-up, table.show-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up {
    display: table !important; }

  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.show-for-large-only, thead.show-for-large-up, thead.show-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up {
    display: table-header-group !important; }

  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.show-for-large-only, tbody.show-for-large-up, tbody.show-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up {
    display: table-row-group !important; }

  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.show-for-large-only, tr.show-for-large-up, tr.show-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up {
    display: table-row !important; }

  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.show-for-large-only, td.show-for-large-only, th.show-for-large-up, td.show-for-large-up, th.show-for-large, td.show-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up {
    display: table-cell !important; } }
/* xlarge displays */
@media only screen and (min-width: 90.063em) {
  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .hide-for-xxlarge-only, .hide-for-xxlarge-up {
    display: inherit !important; }

  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .show-for-xxlarge-only, .show-for-xxlarge-up {
    display: none !important; }

  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up {
    position: static !important;
    height: auto;
    width: auto;
    overflow: visible;
    clip: auto; }

  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .visible-for-xxlarge-only, .visible-for-xxlarge-up {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px); }

  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.show-for-xlarge-only, table.show-for-xlarge-up, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up {
    display: table !important; }

  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.show-for-xlarge-only, thead.show-for-xlarge-up, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up {
    display: table-header-group !important; }

  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.show-for-xlarge-only, tbody.show-for-xlarge-up, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up {
    display: table-row-group !important; }

  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.show-for-xlarge-only, tr.show-for-xlarge-up, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up {
    display: table-row !important; }

  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.show-for-xlarge-only, td.show-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up {
    display: table-cell !important; } }
/* xxlarge displays */
@media only screen and (min-width: 120.063em) {
  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .hide-for-xlarge-only, .show-for-xlarge-up, .show-for-xxlarge-only, .show-for-xxlarge-up {
    display: inherit !important; }

  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .show-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xxlarge-only, .hide-for-xxlarge-up {
    display: none !important; }

  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .hidden-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xxlarge-only, .visible-for-xxlarge-up {
    position: static !important;
    height: auto;
    width: auto;
    overflow: visible;
    clip: auto; }

  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .visible-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px); }

  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.hide-for-xlarge-only, table.show-for-xlarge-up, table.show-for-xxlarge-only, table.show-for-xxlarge-up {
    display: table !important; }

  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.hide-for-xlarge-only, thead.show-for-xlarge-up, thead.show-for-xxlarge-only, thead.show-for-xxlarge-up {
    display: table-header-group !important; }

  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.hide-for-xlarge-only, tbody.show-for-xlarge-up, tbody.show-for-xxlarge-only, tbody.show-for-xxlarge-up {
    display: table-row-group !important; }

  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.hide-for-xlarge-only, tr.show-for-xlarge-up, tr.show-for-xxlarge-only, tr.show-for-xxlarge-up {
    display: table-row !important; }

  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.show-for-xxlarge-only, td.show-for-xxlarge-only, th.show-for-xxlarge-up, td.show-for-xxlarge-up {
    display: table-cell !important; } }
/* Orientation targeting */
.show-for-landscape,
.hide-for-portrait {
  display: inherit !important; }

.hide-for-landscape,
.show-for-portrait {
  display: none !important; }

/* Specific visibility for tables */
table.hide-for-landscape, table.show-for-portrait {
  display: table !important; }

thead.hide-for-landscape, thead.show-for-portrait {
  display: table-header-group !important; }

tbody.hide-for-landscape, tbody.show-for-portrait {
  display: table-row-group !important; }

tr.hide-for-landscape, tr.show-for-portrait {
  display: table-row !important; }

td.hide-for-landscape, td.show-for-portrait,
th.hide-for-landscape,
th.show-for-portrait {
  display: table-cell !important; }

@media only screen and (orientation: landscape) {
  .show-for-landscape,
  .hide-for-portrait {
    display: inherit !important; }

  .hide-for-landscape,
  .show-for-portrait {
    display: none !important; }

  /* Specific visibility for tables */
  table.show-for-landscape, table.hide-for-portrait {
    display: table !important; }

  thead.show-for-landscape, thead.hide-for-portrait {
    display: table-header-group !important; }

  tbody.show-for-landscape, tbody.hide-for-portrait {
    display: table-row-group !important; }

  tr.show-for-landscape, tr.hide-for-portrait {
    display: table-row !important; }

  td.show-for-landscape, td.hide-for-portrait,
  th.show-for-landscape,
  th.hide-for-portrait {
    display: table-cell !important; } }
@media only screen and (orientation: portrait) {
  .show-for-portrait,
  .hide-for-landscape {
    display: inherit !important; }

  .hide-for-portrait,
  .show-for-landscape {
    display: none !important; }

  /* Specific visibility for tables */
  table.show-for-portrait, table.hide-for-landscape {
    display: table !important; }

  thead.show-for-portrait, thead.hide-for-landscape {
    display: table-header-group !important; }

  tbody.show-for-portrait, tbody.hide-for-landscape {
    display: table-row-group !important; }

  tr.show-for-portrait, tr.hide-for-landscape {
    display: table-row !important; }

  td.show-for-portrait, td.hide-for-landscape,
  th.show-for-portrait,
  th.hide-for-landscape {
    display: table-cell !important; } }
/* Touch-enabled device targeting */
.show-for-touch {
  display: none !important; }

.hide-for-touch {
  display: inherit !important; }

.touch .show-for-touch {
  display: inherit !important; }

.touch .hide-for-touch {
  display: none !important; }

/* Specific visibility for tables */
table.hide-for-touch {
  display: table !important; }

.touch table.show-for-touch {
  display: table !important; }

thead.hide-for-touch {
  display: table-header-group !important; }

.touch thead.show-for-touch {
  display: table-header-group !important; }

tbody.hide-for-touch {
  display: table-row-group !important; }

.touch tbody.show-for-touch {
  display: table-row-group !important; }

tr.hide-for-touch {
  display: table-row !important; }

.touch tr.show-for-touch {
  display: table-row !important; }

td.hide-for-touch {
  display: table-cell !important; }

.touch td.show-for-touch {
  display: table-cell !important; }

th.hide-for-touch {
  display: table-cell !important; }

.touch th.show-for-touch {
  display: table-cell !important; }

/* Print visibility */
@media print {
  .show-for-print {
    display: block; }

  .hide-for-print {
    display: none; }

  table.show-for-print {
    display: table !important; }

  thead.show-for-print {
    display: table-header-group !important; }

  tbody.show-for-print {
    display: table-row-group !important; }

  tr.show-for-print {
    display: table-row !important; }

  td.show-for-print {
    display: table-cell !important; }

  th.show-for-print {
    display: table-cell !important; } }





/* @import url(http://fonts.googleapis.com/css?family=Roboto+Condensed); */

@import "font-awesome.css";

.orion-menu {
	width: 100%;
	padding: 0;
	position: relative;
	float: left;
	/* background: #454545; */
	list-style: none;
	font-family: 'Roboto Condensed', sans-serif;
	height: 58px;
	background: url("http://3.bp.blogspot.com/-ci-xqYU-K-c/VQ_-38qbfrI/AAAAAAAAAFg/upDRqFhFGXI/s1600/bg_menu.png");
}

.orion-menu li {
	display: inline-block;
	font-size: 15px;
	margin: 0;
	padding: 0;
	float: left;
	line-height: 20px;
	position: relative
}

.orion-menu li a {
	padding: 19px 22px;
	color: #bababa;
	text-decoration: none;
	display: inline-block;
	-o-transition: color .3s linear, background .3s linear;
	-webkit-transition: color .3s linear, background .3s linear;
	-moz-transition: color .3s linear, background .3s linear;
	transition: color .3s linear, background .3s linear
}

.orion-menu li:hover>a {
	color: #fff
}

.orion-menu li.active>a {
	background: #555
}

.orion-menu>li>a {
	text-transform: uppercase
}

.orion-menu ul,.orion-menu ul li ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: none;
	position: absolute;
	z-index: 999;
	width: 150px;
	background: #454545
}

.orion-menu ul {
	top: 58px;
	left: 0;
	background-color: #ad32bd;
}

.orion-menu ul li ul {
	top: 0;
	left: 150px
}

.orion-menu ul li {
	clear: both;
	width: 100%;
	font-size: 14px
}

.orion-menu ul li a {
	width: 100%;
	padding: 12px 22px;
	display: inline-block;
	float: left;
	clear: both;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box
}

.orion-menu ul li:hover>a {
	background: #555;
}

.orion-menu .indicator {
	color: #fff;
	position: absolute;
	right: 8px;
	top: 19px;
	font-family: FontAwesome;
	font-size: 12px
}

.orion-menu .indicator:before {
	content: "\f0d7"
}

.orion-menu ul li .indicator {
	right: 20px;
	top: 13px
}

.orion-menu ul li .indicator:before {
	content: "\f0da"
}

.orion-menu li.search {
	float: right
}

.orion-menu li.search form {
	margin: 15px 20px 0 0
}

.orion-menu li.search form input.search {
	height: 24px;
	width: 1px;
	float: right;
	padding-left: 5px;
	padding-right: 30px;
	color: #454545;
	outline: 0;
	border: 0;
	font-family: 'Roboto Condensed', sans-serif;
	background-color: transparent;
	background-image: url(../images/search.png);
	background-repeat: no-repeat;
	background-attachment: scroll;
	background-position: 10px 6px;
	-o-transition: width .3s ease-in-out, background .3s ease-in-out;
	-moz-transition: width .3s ease-in-out, background .3s ease-in-out;
	-webkit-transition: width .3s ease-in-out, background .3s ease-in-out;
	transition: width .3s ease-in-out, background .3s ease-in-out
}

.orion-menu li.search form input.search:focus {
	width: 120px;
	color: #fff;
	background-color: #555;
	background-image: url(../img/search-hover.png);
	background-position: 129px 9px
}

.orion-menu li.social {
	float: right;
	margin-right: 20px
}

.orion-menu li.social a {
	display: inline-block;
	padding: 19px 15px;
	position: relative;
	width: 15px;
	text-align: center
}

.orion-menu li.social a:hover {
	color: #fff
}

.orion-menu li.social a .tooltip {
	width: 70px;
	padding: 5px;
	background: #555;
	-ms-filter: "alpha(Opacity=0)";
	opacity: 0;
	position: absolute;
	font-size: 9px;
	top: -20px;
	left: -27px;
	border-radius: 2px;
	text-align: center;
	-o-transition: opacity .3s linear;
	-webkit-transition: opacity .3s linear;
	-moz-transition: opacity .3s linear;
	transition: opacity .3s linear
}

.orion-menu li.social a:hover .tooltip {
	-ms-filter: "alpha(Opacity=100)";
	opacity: 1
}

.orion-menu li.social a .tooltip:after,.orion-menu li.social a .tooltip:before
	{
	content: '';
	position: absolute;
	bottom: -8px;
	left: 50%;
	margin-left: -7px;
	width: 0;
	height: 0;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-top: 8px solid #555
}

.orion-menu>li.showhide {
	display: none;
	width: 100%;
	height: 50px;
	cursor: pointer;
	color: #fff;
	background: #fff
}

.orion-menu>li.showhide span.title {
	margin: 16px 0 0 18px;
	float: left
}

.orion-menu>li.showhide span.icon {
	margin: 17px 20px;
	float: right
}

.orion-menu>li.showhide .icon em {
	margin-bottom: 3px;
	display: block;
	width: 20px;
	height: 2px;
	background: #ccc;
}

.black,.black li ul,.black ul li ul,.black>li.showhide {
	background: #000;
}

.black li a,.orion-menu li.social a {
	color: #bababa;
}

.black li.active>a,.black li.social a .tooltip,.black ul li:hover>a {
	background: #333;
}

.black li.search form input.search:focus {
	background-color: #333;
}

.black li.social a .tooltip:after,.black li.social a .tooltip:before {
	border-top-color: #333;
}

.blue li ul,.blue ul li ul,.blue>li.showhide {
	background: #ad32bd;
	z-index: 11111111;
}

.blue li a,.orion-menu li.social a {
	color: #fff;
}

.blue li.active>a,.blue li.social a .tooltip,.blue ul li:hover>a {
	background: #C31FD8;
}

.blue li.search form input.search:focus {
	background-color: #833391;
}

.blue li.social a .tooltip:after,.blue li.social a .tooltip:before {
	border-top-color: #833391;
}

.green,.green li ul,.green ul li ul,.green>li.showhide {
	background: #036564;
}

.green li a,.orion-menu li.social a {
	color: #fff;
}

.green li.active>a,.green li.social a .tooltip,.green ul li:hover>a {
	background: #047c7a;
}

.green li.search form input.search:focus {
	background-color: #047c7a;
}

.green li.social a .tooltip:after,.green li.social a .tooltip:before {
	border-top-color: #047c7a
}

.red,.red li ul,.red ul li ul,.red>li.showhide {
	background: #C92C2C
}

.orion-menu li.social a,.red li a {
	color: #fff
}

.red li.active>a,.red li.social a .tooltip,.red ul li:hover>a {
	background: #d53f3f
}

.red li.search form input.search:focus {
	background-color: #d53f3f
}

.red li.social a .tooltip:after,.red li.social a .tooltip:before {
	border-top-color: #d53f3f
}

.orange,.orange li ul,.orange ul li ul,.orange>li.showhide {
	background: #FC6B0A
}

.orange li a,.orion-menu li.social a {
	color: #fff
}

.orange li.active>a,.orange li.social a .tooltip,.orange ul li:hover>a {
	background: #fd812f
}

.orange li.search form input.search:focus {
	background-color: #fd812f
}

.orange li.social a .tooltip:after,.orange li.social a .tooltip:before {
	border-top-color: #fd812f
}

.safbi,.safbi li ul,.safbi ul li ul,.safbi>li.showhide {
	background: #AB3E5B
}

.orion-menu li.social a,.safbi li a {
	color: #fff
}

.safbi li.active>a,.safbi li.social a .tooltip,.safbi ul li:hover>a {
	background: #b74362
}

.safbi li.search form input.search:focus {
	background-color: #b74362
}

.safbi li.social a .tooltip:after,.safbi li.social a .tooltip:before {
	border-top-color: #b74362
}

.petrol,.petrol li ul,.petrol ul li ul,.petrol>li.showhide {
	background: #33454E
}

.orion-menu li.social a,.petrol li a {
	color: #fff
}

.petrol li.active>a,.petrol li.social a .tooltip,.petrol ul li:hover>a {
	background: #435a65
}

.petrol li.search form input.search:focus {
	background-color: #435a65
}

.petrol li.social a .tooltip:after,.petrol li.social a .tooltip:before {
	border-top-color: #435a65
}

.zoom {
	-webkit-animation: zoom .3s ease both;
	-moz-animation: zoom .3s ease both;
	-o-animation: zoom .3s ease both;
	animation: zoom .3s ease both
}

@
