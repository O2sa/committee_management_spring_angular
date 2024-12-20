import{$a as Ve,A as T,B as d,F as R,J as ye,M as J,Ma as D,N as y,R as a,U as Q,Xa as _e,Y as V,Za as Ce,_ as h,a as u,b as c,bb as b,cb as f,e as fe,ea as ee,eb as te,f as pe,i as ge,j as me,q as k,r as C,s as ve,t as G,ta as j,u as v}from"./chunk-U5XVBXKV.js";var Oe=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(Q),a(J))},e.\u0275dir=d({type:e});let i=e;return i})(),tt=(()=>{let e=class e extends Oe{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=ye(e)))(s||e)}})(),e.\u0275dir=d({type:e,features:[h]});let i=e;return i})(),ae=new v("");var it={provide:ae,useExisting:C(()=>xe),multi:!0};function nt(){let i=te()?te().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var rt=new v(""),xe=(()=>{let e=class e extends Oe{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!nt())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(Q),a(J),a(rt,8))},e.\u0275dir=d({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&j("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[D([it]),h]});let i=e;return i})();function g(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Ne(i){return i!=null&&typeof i.length=="number"}var Z=new v(""),X=new v(""),st=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,De=class{static min(e){return ot(e)}static max(e){return at(e)}static required(e){return lt(e)}static requiredTrue(e){return ut(e)}static email(e){return ct(e)}static minLength(e){return dt(e)}static maxLength(e){return ht(e)}static pattern(e){return ft(e)}static nullValidator(e){return Pe(e)}static compose(e){return Be(e)}static composeAsync(e){return Ue(e)}};function ot(i){return e=>{if(g(e.value)||g(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<i?{min:{min:i,actual:e.value}}:null}}function at(i){return e=>{if(g(e.value)||g(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>i?{max:{max:i,actual:e.value}}:null}}function lt(i){return g(i.value)?{required:!0}:null}function ut(i){return i.value===!0?null:{required:!0}}function ct(i){return g(i.value)||st.test(i.value)?null:{email:!0}}function dt(i){return e=>g(e.value)||!Ne(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function ht(i){return e=>Ne(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function ft(i){if(!i)return Pe;let e,n;return typeof i=="string"?(n="",i.charAt(0)!=="^"&&(n+="^"),n+=i,i.charAt(i.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=i.toString(),e=i),t=>{if(g(t.value))return null;let r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Pe(i){return null}function ke(i){return i!=null}function Ge(i){return _e(i)?pe(i):i}function Te(i){let e={};return i.forEach(n=>{e=n!=null?u(u({},e),n):e}),Object.keys(e).length===0?null:e}function Re(i,e){return e.map(n=>n(i))}function pt(i){return!i.validate}function je(i){return i.map(e=>pt(e)?e:n=>e.validate(n))}function Be(i){if(!i)return null;let e=i.filter(ke);return e.length==0?null:function(n){return Te(Re(n,e))}}function le(i){return i!=null?Be(je(i)):null}function Ue(i){if(!i)return null;let e=i.filter(ke);return e.length==0?null:function(n){let t=Re(n,e).map(Ge);return me(t).pipe(ge(Te))}}function ue(i){return i!=null?Ue(je(i)):null}function be(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function He(i){return i._rawValidators}function Le(i){return i._rawAsyncValidators}function ie(i){return i?Array.isArray(i)?i:[i]:[]}function U(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ae(i,e){let n=ie(e);return ie(i).forEach(r=>{U(n,r)||n.push(r)}),n}function Me(i,e){return ie(e).filter(n=>!U(i,n))}var H=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=le(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},p=class extends H{get formDirective(){return null}get path(){return null}},_=class extends H{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},L=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},gt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ei=c(u({},gt),{"[class.ng-submitted]":"isSubmitted"}),ti=(()=>{let e=class e extends L{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(_,2))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&ee("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[h]});let i=e;return i})(),ii=(()=>{let e=class e extends L{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(p,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&ee("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[h]});let i=e;return i})();var F="VALID",B="INVALID",A="PENDING",I="DISABLED",m=class{},$=class extends m{constructor(e,n){super(),this.value=e,this.source=n}},O=class extends m{constructor(e,n){super(),this.pristine=e,this.source=n}},x=class extends m{constructor(e,n){super(),this.touched=e,this.source=n}},M=class extends m{constructor(e,n){super(),this.status=e,this.source=n}},ne=class extends m{constructor(e){super(),this.source=e}},re=class extends m{constructor(e){super(),this.source=e}};function ce(i){return(Y(i)?i.validators:i)||null}function mt(i){return Array.isArray(i)?le(i):i||null}function de(i,e){return(Y(e)?e.asyncValidators:i)||null}function vt(i){return Array.isArray(i)?ue(i):i||null}function Y(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function $e(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new k(1e3,"");if(!t[n])throw new k(1001,"")}function We(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new k(1002,"")})}var E=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=b(()=>this.statusReactive()),this.statusReactive=V(void 0),this._pristine=b(()=>this.pristineReactive()),this.pristineReactive=V(!0),this._touched=b(()=>this.touchedReactive()),this.touchedReactive=V(!1),this._events=new fe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return f(this.statusReactive)}set status(e){f(()=>this.statusReactive.set(e))}get valid(){return this.status===F}get invalid(){return this.status===B}get pending(){return this.status==A}get disabled(){return this.status===I}get enabled(){return this.status!==I}get pristine(){return f(this.pristineReactive)}set pristine(e){f(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return f(this.touchedReactive)}set touched(e){f(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ae(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(u({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new x(!0,t))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:t})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t),n&&e.emitEvent!==!1&&this._events.next(new x(!1,t))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(u({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new O(!1,t))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),n&&e.emitEvent!==!1&&this._events.next(new O(!0,t))}markAsPending(e={}){this.status=A;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new M(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(u({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this.errors=null,this._forEachChild(r=>{r.disable(c(u({},e),{onlySelf:!0}))}),this._updateValue();let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,t)),this._events.next(new M(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(u({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(t=>{t.enable(c(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(u({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===A)&&this._runAsyncValidator(t,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $(this.value,n)),this._events.next(new M(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(u({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let t=Ge(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,t){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||t)&&this._events.next(new M(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,t)}_initObservables(){this.valueChanges=new y,this.statusChanges=new y}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(B)?B:F}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new O(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new x(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Y(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=mt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=vt(this._rawAsyncValidators)}},w=class extends E{constructor(e,n,t){super(ce(n),de(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){We(this,!0,e),Object.keys(e).forEach(t=>{$e(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var se=class extends w{};var P=new v("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";function qe(i,e){return[...e.path,i]}function W(i,e,n=K){he(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),_t(i,e),Vt(i,e),Ct(i,e),yt(i,e)}function Ee(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),z(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function q(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function yt(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function he(i,e){let n=He(i);e.validator!==null?i.setValidators(be(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=Le(i);e.asyncValidator!==null?i.setAsyncValidators(be(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();q(e._rawValidators,r),q(e._rawAsyncValidators,r)}function z(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=He(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=Le(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,i.setAsyncValidators(s))}}}let t=()=>{};return q(e._rawValidators,t),q(e._rawAsyncValidators,t),n}function _t(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&ze(i,e)})}function Ct(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&ze(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function ze(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Vt(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function Ze(i,e){i==null,he(i,e)}function Dt(i,e){return z(i,e)}function Xe(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function bt(i){return Object.getPrototypeOf(i.constructor)===tt}function Ye(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Ke(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===xe?n=s:bt(s)?t=s:r=s}),r||t||n||null}function At(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}var Mt={provide:p,useExisting:C(()=>Et)},S=Promise.resolve(),Et=(()=>{let e=class e extends p{get submitted(){return f(this.submittedReactive)}constructor(t,r,s){super(),this.callSetDisabledState=s,this._submitted=b(()=>this.submittedReactive()),this.submittedReactive=V(!1),this._directives=new Set,this.ngSubmit=new y,this.form=new w({},le(t),ue(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){S.then(()=>{let r=this._findContainer(t.path);t.control=r.registerControl(t.name,t.control),W(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){S.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){S.then(()=>{let r=this._findContainer(t.path),s=new w({});Ze(s,t),r.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){S.then(()=>{let r=this._findContainer(t.path);r&&r.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,r){S.then(()=>{this.form.get(t.path).setValue(r)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Ye(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(r){return new(r||e)(a(Z,10),a(X,10),a(P,8))},e.\u0275dir=d({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,s){r&1&&j("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[D([Mt]),h]});let i=e;return i})();function we(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function Fe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var N=class extends E{constructor(e=null,n,t){super(ce(n),de(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Fe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){we(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){we(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Fe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var wt=i=>i instanceof N;var Ft={provide:_,useExisting:C(()=>It)},Ie=Promise.resolve(),It=(()=>{let e=class e extends _{constructor(t,r,s,o,l,et){super(),this._changeDetectorRef=l,this.callSetDisabledState=et,this.control=new N,this._registered=!1,this.name="",this.update=new y,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Ke(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Xe(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){W(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Ie.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let r=t.isDisabled.currentValue,s=r!==0&&Ve(r);Ie.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?qe(t,this._parent):[t]}};e.\u0275fac=function(r){return new(r||e)(a(p,9),a(Z,10),a(X,10),a(ae,10),a(Ce,8),a(P,8))},e.\u0275dir=d({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[D([Ft]),h,R]});let i=e;return i})(),ri=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=d({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var Je=new v("");var St={provide:p,useExisting:C(()=>Ot)},Ot=(()=>{let e=class e extends p{get submitted(){return f(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,r,s){super(),this.callSetDisabledState=s,this._submitted=b(()=>this._submittedReactive()),this._submittedReactive=V(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new y,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return W(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){Ee(t.control||null,t,!1),At(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this._submittedReactive.set(!0),Ye(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new ne(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new re(this.form))}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,s=this.form.get(t.path);r!==s&&(Ee(r||null,t),wt(s)&&(W(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);Ze(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&Dt(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){he(this.form,this),this._oldForm&&z(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Z,10),a(X,10),a(P,8))},e.\u0275dir=d({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&j("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[D([St]),h,R]});let i=e;return i})();var xt={provide:_,useExisting:C(()=>Nt)},Nt=(()=>{let e=class e extends _{set isDisabled(t){}constructor(t,r,s,o,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new y,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Ke(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Xe(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return qe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(p,13),a(Z,10),a(X,10),a(ae,10),a(Je,8))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[D([xt]),h,R]});let i=e;return i})();var Qe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=G({});let i=e;return i})(),oe=class extends E{constructor(e,n,t){super(ce(n),de(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){We(this,!1,e),e.forEach((t,r)=>{$e(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Se(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var si=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let s=this._reduceControls(t),o={};return Se(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new w(s,o)}record(t,r=null){let s=this._reduceControls(t);return new se(s,r)}control(t,r,s){let o={};return this.useNonNullable?(Se(r)?o=r:(o.validators=r,o.asyncValidators=s),new N(t,c(u({},o),{nonNullable:!0}))):new N(t,r,s)}array(t,r,s){let o=t.map(l=>this._createControl(l));return new oe(o,r,s)}_reduceControls(t){let r={};return Object.keys(t).forEach(s=>{r[s]=this._createControl(t[s])}),r}_createControl(t){if(t instanceof N)return t;if(t instanceof E)return t;if(Array.isArray(t)){let r=t[0],s=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(r,s,o)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ve({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var oi=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:P,useValue:t.callSetDisabledState??K}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=G({imports:[Qe]});let i=e;return i})(),ai=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:Je,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:P,useValue:t.callSetDisabledState??K}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=G({imports:[Qe]});let i=e;return i})();export{ae as a,xe as b,De as c,_ as d,ti as e,ii as f,Et as g,It as h,ri as i,Ot as j,Nt as k,si as l,oi as m,ai as n};