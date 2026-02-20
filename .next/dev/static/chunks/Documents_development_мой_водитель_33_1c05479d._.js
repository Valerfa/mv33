(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// components/ContactPopup.tsx
"use client";
;
;
function normalizePhone(raw) {
    // оставляем только цифры
    const digits = raw.replace(/\D/g, "");
    // для РФ: допускаем +7XXXXXXXXXX или 8XXXXXXXXXX
    if (digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"))) return digits;
    if (digits.length === 10) return "7" + digits; // если ввели без кода
    return digits;
}
function formatPhone(raw) {
    const d = raw.replace(/\D/g, "");
    // строим маску +7 (999) 999-99-99
    let digits = d;
    // если пользователь начал с 8 — визуально всё равно показываем +7
    if (digits.startsWith("8")) digits = "7" + digits.slice(1);
    // если начал с 7 и ввёл больше — оставим как есть
    const dd = digits.slice(0, 11);
    const p1 = dd.slice(1, 4);
    const p2 = dd.slice(4, 7);
    const p3 = dd.slice(7, 9);
    const p4 = dd.slice(9, 11);
    let out = "+7";
    if (p1) out += ` (${p1}`;
    if (p1.length === 3) out += `)`;
    if (p2) out += ` ${p2}`;
    if (p3) out += `-${p3}`;
    if (p4) out += `-${p4}`;
    return out;
}
function ContactPopup({ open, onClose, initialPhone }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneInput, setPhoneInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // закрытие по Esc + блок скролла
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactPopup.useEffect": ()=>{
            if (open && initialPhone) {
                setPhoneInput(formatPhone(initialPhone));
            }
            const onKeyDown = {
                "ContactPopup.useEffect.onKeyDown": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["ContactPopup.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "ContactPopup.useEffect": ()=>{
                    document.body.style.overflow = "";
                    window.removeEventListener("keydown", onKeyDown);
                }
            })["ContactPopup.useEffect"];
        }
    }["ContactPopup.useEffect"], [
        open,
        initialPhone,
        onClose
    ]);
    const normalizedPhone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContactPopup.useMemo[normalizedPhone]": ()=>normalizePhone(phoneInput)
    }["ContactPopup.useMemo[normalizedPhone]"], [
        phoneInput
    ]);
    const phoneIsValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContactPopup.useMemo[phoneIsValid]": ()=>{
            // РФ номер: 11 цифр и начинается с 7
            return normalizedPhone.length === 11 && normalizedPhone.startsWith("7");
        }
    }["ContactPopup.useMemo[phoneIsValid]"], [
        normalizedPhone
    ]);
    // Кнопка активна, если:
    // 1) есть валидный телефон ИЛИ выбран мессенджер
    // 2) поставлено согласие
    const canSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContactPopup.useMemo[canSubmit]": ()=>{
            return phoneIsValid && consent;
        }
    }["ContactPopup.useMemo[canSubmit]"], [
        phoneIsValid,
        consent
    ]);
    function handlePhoneChange(e) {
        const raw = e.target.value;
        setPhoneInput(formatPhone(raw));
    }
    async function handleSubmit() {
        if (!canSubmit) return;
        await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "contact",
                name,
                phone: phoneInput,
                comment
            })
        });
        setSubmitted(true);
    }
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[2000] flex items-center justify-center",
        role: "dialog",
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Закрыть",
                onClick: onClose,
                className: "absolute inset-0 bg-black/70"
            }, void 0, false, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-[2001] w-[min(540px,92vw)] bg-whitesoft rounded-2xl shadow-2xl p-4 md:p-6 pt-6 md:pt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        "aria-label": "Закрыть",
                        className: "absolute right-4 top-4 h-10 w-10 rounded-xl text-black hover:bg-black hover:text-light transition flex items-center justify-center",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "title text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center text-black",
                                children: [
                                    "Укажите номер, ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                        lineNumber: 139,
                                        columnNumber: 22
                                    }, this),
                                    " по которому с вами ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                        lineNumber: 139,
                                        columnNumber: 48
                                    }, this),
                                    " можно связаться"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                lineNumber: 138,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 lg:mt-6 space-y-3 text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        placeholder: "Ваше имя",
                                        className: "w-full h-12 lg:h-16 rounded-xl border border-black/20 px-6 text-lg lg:text-xl outline-none focus:border-black"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                        lineNumber: 144,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white w-full h-12 lg:h-16 rounded-xl border border-black/20 px-6 flex items-center gap-3 focus-within:border-black",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg lg:text-xl",
                                                children: "🇷🇺"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                                lineNumber: 153,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                inputMode: "tel",
                                                value: phoneInput,
                                                onChange: handlePhoneChange,
                                                placeholder: "+7 (000) 000-00-00",
                                                className: "w-full h-full text-lg lg:text-xl outline-none bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                                lineNumber: 154,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                        lineNumber: 152,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: comment,
                                        onChange: (e)=>setComment(e.target.value),
                                        placeholder: "Комментарий (необязательно)",
                                        rows: 3,
                                        className: "w-full rounded-xl border border-black/20 px-6 py-4 text-base lg:text-lg outline-none resize-none focus:border-black"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                        lineNumber: 164,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "mt-4 flex items-start gap-4 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: consent,
                                                onChange: (e)=>setConsent(e.target.checked),
                                                className: "mt-1 h-6 w-6 accent-black"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                                lineNumber: 174,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leading-snug",
                                                children: [
                                                    "Я даю согласие на обработку персональных данных в соответствии с",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/privacy",
                                                        className: "text-accent underline underline-offset-2 hover:text-accent/70",
                                                        onClick: onClose,
                                                        children: "Политикой конфиденциальности"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                                lineNumber: 180,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                        lineNumber: 173,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleSubmit,
                                        disabled: !canSubmit,
                                        className: [
                                            "mt-6 w-full h-12 lg:h-16 rounded-2xl font-medium text-lg transition",
                                            canSubmit ? "bg-black text-light hover:opacity-90" : "bg-black/20 text-black/40 cursor-not-allowed"
                                        ].join(" "),
                                        children: "Отправить данные"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                        lineNumber: 193,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                lineNumber: 142,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-20 text-center flex flex-col items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "success-icon",
                                width: "48",
                                height: "48",
                                viewBox: "0 0 72 72",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "36",
                                        cy: "36",
                                        r: "34",
                                        fill: "#56AE62",
                                        strokeWidth: "4",
                                        className: "success-circle"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                        lineNumber: 220,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M22 38L32 48L50 28",
                                        stroke: "#F3EDE6",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "success-check"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                        lineNumber: 228,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                lineNumber: 213,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl lg:text-2xl font-medium leading-snug",
                                children: "Данные успешно отправлены!"
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                                lineNumber: 238,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                        lineNumber: 211,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(ContactPopup, "v7IEk1ZvcTnpvxB63pAglpdatEs=");
_c = ContactPopup;
var _c;
__turbopack_context__.k.register(_c, "ContactPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/development/мой_водитель_33/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$components$2f$ContactPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/components/ContactPopup.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function formatPhone(raw) {
    const d = raw.replace(/\D/g, "");
    let digits = d;
    if (digits.startsWith("8")) digits = "7" + digits.slice(1);
    const dd = digits.slice(0, 11);
    const p1 = dd.slice(1, 4);
    const p2 = dd.slice(4, 7);
    const p3 = dd.slice(7, 9);
    const p4 = dd.slice(9, 11);
    let out = "+7";
    if (p1) out += ` (${p1}`;
    if (p1.length === 3) out += `)`;
    if (p2) out += ` ${p2}`;
    if (p3) out += `-${p3}`;
    if (p4) out += `-${p4}`;
    return out;
}
function Hero() {
    _s();
    const [contactOpen, setContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function handlePhoneChange(e) {
        setPhone(formatPhone(e.target.value));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-screen max-h-screen bg-[#131313] w-full rounded-b-xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/vladimir.jpg",
                        alt: "",
                        fill: true,
                        priority: true,
                        quality: 90,
                        className: "object-cover object-center"
                    }, void 0, false, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/80"
                    }, void 0, false, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "relative z-20 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex items-center justify-between h-16 p-4 md:p-8 lg:p-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/",
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/icons/logo.svg",
                                        alt: "Логотип",
                                        width: 36,
                                        height: 36,
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+79203669096",
                                            className: "text-white body-text transition hover:text-accent/80",
                                            children: "+7 (920) 366-90-96"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "hidden h-12 px-4 md:px-6 rounded-xl bg-white/90 backdrop-blur-sm text-black text-sm font-medium hover:bg-white transition",
                                            children: "Заказать"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full h-[calc(100vh-4rem)] flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col justify-end mx-4 md:mx-4 lg:mx-12 pb-4 md:pb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "title-hero text-6xl md:text-7xl lg:text-8xl xl:text-[100px] 2xl:text-[140px] 3xl:text-[200px] text-light leading-[0.85]",
                                        children: "Безопасные поездки"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "title-hero text-6xl md:text-7xl lg:text-8xl xl:text-[100px] 2xl:text-[140px] 3xl:text-[200px] text-accent leading-[0.85]",
                                        children: "с трезвым водителем"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 md:mt-6 lg:mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center rounded-full px-4 py-2 text-xs md:text-sm text-accent bg-accent/20",
                                            children: "Работаем 24 часа в сутки"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t-2 border-white/20 w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 min-h-[30vh]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full md:border-r-2 border-white/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full mx-4 md:mx-4 lg:mx-12 flex flex-col justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "caption text-white/30 mb-4 md:mb-6",
                                                        children: "О сервисе"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-md md:text-lg xl:text-2xl text-white font-light leading-relaxed",
                                                        children: "Мы помогаем быть вовремя в нужном месте. Независимо от обстоятельств. Мы сделаем вашу поездку комфортной и безопасной."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full mx-4 md:mx-8 lg:mr-12 xl:mr-16 2xl:mr-24 flex flex-col justify-center py-4 md:py-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:hidden mb-6",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "tel:+79203669096",
                                                            className: "block w-full px-8 py-4 rounded-xl bg-accent body-text text-light hover:opacity-90 transition h-16 flex items-center justify-center",
                                                            children: "Позвонить"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hidden md:block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "caption text-white/30 mb-4",
                                                                children: "Заказ услуги"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full 2xl:w-3/4 h-16 bg-white rounded-xl py-1 pl-4 md:pl-6 pr-1 flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        inputMode: "tel",
                                                                        value: phone,
                                                                        onChange: handlePhoneChange,
                                                                        placeholder: "+7 (000) 000-00-00",
                                                                        className: "min-w-0 flex-1 h-full text-lg xl:text-2xl text-black bg-transparent outline-none font-normal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>setContactOpen(true),
                                                                        className: "h-full px-4 md:px-6 rounded-xl bg-black text-white text-xs md:text-sm lg:text-md xl:text-xl flex items-center justify-center hover:bg-accent hover:text-black transition leading-none md:whitespace-nowrap",
                                                                        children: "Заказать звонок"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$components$2f$ContactPopup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: contactOpen,
                onClose: ()=>setContactOpen(false),
                initialPhone: phone
            }, void 0, false, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/Hero.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Hero, "Ad7gBNjkC1czK2WY2WgJf2w6Qxw=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/development/мой_водитель_33/components/Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function TeamBlock() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full p-4 md:p-8 lg:p-12 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl text-black",
                        children: "•"
                    }, void 0, false, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-black text-sm font-medium",
                        children: "Как мы работаем"
                    }, void 0, false, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "heading text-black mb-8 max-w-2xl",
                children: [
                    "Предоставляем удобный ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                        lineNumber: 16,
                        columnNumber: 31
                    }, this),
                    " и понятный сервис"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center md:items-center justify-start md:justify-between gap-2 rounded-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "body-text text-black text-center md:text-left",
                            children: "Вы звоните нам"
                        }, void 0, false, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                            lineNumber: 24,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-black text-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "md:hidden",
                                    children: "↓"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                                    lineNumber: 29,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:inline",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                                    lineNumber: 30,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                            lineNumber: 28,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "body-text text-black text-center md:text-left",
                            children: "Согласовываем маршрут"
                        }, void 0, false, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                            lineNumber: 33,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-black text-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "md:hidden",
                                    children: "↓"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                                    lineNumber: 38,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:inline",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                                    lineNumber: 39,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                            lineNumber: 37,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "body-text text-black text-center md:text-left",
                            children: "Назначаем встречу"
                        }, void 0, false, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                            lineNumber: 42,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-black text-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "md:hidden",
                                    children: "↓"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                                    lineNumber: 47,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:inline",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                                    lineNumber: 48,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                            lineNumber: 46,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "body-text text-black text-center md:text-left",
                            children: "Вы полагаетесь на нас"
                        }, void 0, false, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                            lineNumber: 51,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                    lineNumber: 22,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                lineNumber: 21,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-64 md:h-96 lg:h-[600px] mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                    preload: "metadata",
                    className: "absolute inset-0 w-full h-full object-cover rounded-3xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: "/images/hero-video2.mp4",
                        type: "video/mp4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/development/мой_водитель_33/components/Gallery.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = TeamBlock;
var _c;
__turbopack_context__.k.register(_c, "TeamBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/development/мой_водитель_33/public/icons/avito-black.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/avito-black.ffe2b0c3.svg");}),
"[project]/Documents/development/мой_водитель_33/public/icons/avito-black.svg.mjs { IMAGE => \"[project]/Documents/development/мои\\u{306}_водитель_33/public/icons/avito-black.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$black$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/public/icons/avito-black.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$black$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 206,
    height: 72,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/development/мой_водитель_33/public/icons/avito-logo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/avito-logo.670eefd8.svg");}),
"[project]/Documents/development/мой_водитель_33/public/icons/avito-logo.svg.mjs { IMAGE => \"[project]/Documents/development/мои\\u{306}_водитель_33/public/icons/avito-logo.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/public/icons/avito-logo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 55,
    height: 55,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/development/мой_водитель_33/public/icons/stars.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/stars.46cc7b88.svg");}),
"[project]/Documents/development/мой_водитель_33/public/icons/stars.svg.mjs { IMAGE => \"[project]/Documents/development/мои\\u{306}_водитель_33/public/icons/stars.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/public/icons/stars.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 162,
    height: 30,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/development/мой_водитель_33/public/icons/stars-black.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/stars-black.9a2265a7.svg");}),
"[project]/Documents/development/мой_водитель_33/public/icons/stars-black.svg.mjs { IMAGE => \"[project]/Documents/development/мои\\u{306}_водитель_33/public/icons/stars-black.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2d$black$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/public/icons/stars-black.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2d$black$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 162,
    height: 30,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/development/мой_водитель_33/components/Reviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReviewsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$black$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$5c$u$7b$306$7d$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$black$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Documents/development/мой_водитель_33/public/icons/avito-black.svg.mjs { IMAGE => "[project]/Documents/development/мои\\u{306}_водитель_33/public/icons/avito-black.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$5c$u$7b$306$7d$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Documents/development/мой_водитель_33/public/icons/avito-logo.svg.mjs { IMAGE => "[project]/Documents/development/мои\\u{306}_водитель_33/public/icons/avito-logo.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$5c$u$7b$306$7d$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Documents/development/мой_водитель_33/public/icons/stars.svg.mjs { IMAGE => "[project]/Documents/development/мои\\u{306}_водитель_33/public/icons/stars.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2d$black$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$5c$u$7b$306$7d$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2d$black$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Documents/development/мой_водитель_33/public/icons/stars-black.svg.mjs { IMAGE => "[project]/Documents/development/мои\\u{306}_водитель_33/public/icons/stars-black.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const REVIEWS = [
    {
        id: 1,
        text: "Договорились быстро, все четко и по делу! Очень ответственный и отзывчивый человек, всем рекомендую, будем обращаться еще.",
        name: "Дарья",
        company: "Трезвый водитель · 26.04.2023",
        rating: 5
    },
    {
        id: 2,
        text: "Константин очень доброжелательный человек, обращался к нему много раз, все было в лучшем виде, ставлю оценку 100+.",
        name: "Алик",
        company: "Трезвый водитель · 18.05.2022",
        rating: 5
    },
    {
        id: 3,
        text: "Ребята молодцы, приехали быстро, на машине ездят профессионально и очень аккуратно, буду рекомендовать!",
        name: "Алексей",
        company: "Трезвый водитель · 31.07.2023",
        rating: 5
    },
    {
        id: 4,
        text: "Быстро откликнулись на вызов. Оперативно перегнали авто в Москву. Все просто супер! Всем рекомендую!",
        name: "Марина",
        company: "Перегон автомобиля · 29.09.2023",
        rating: 5
    }
];
function ReviewsSection() {
    _s();
    const scrollerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scroll = (dir)=>{
        if (!scrollerRef.current) return;
        const amount = dir === "left" ? -360 : 360;
        scrollerRef.current.scrollBy({
            left: amount,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-light py-12 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col gap-4 md:flex-row md:gap-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-4 md:ml-8 lg:ml-12 lg:w-[500px] shrink-0 flex flex-col mb-8 md:mb-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-black/70 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$5c$u$7b$306$7d$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "rating",
                                    className: "h-4 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                    lineNumber: 59,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "caption opacity-60",
                                    children: "5.0 за услугу"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$black$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$5c$u$7b$306$7d$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$black$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                    alt: "Avito",
                                    className: "h-5 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                            lineNumber: 58,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-end md:flex-col md:items-start justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "heading text-black mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 15
                                                }, this),
                                                "Нас выбирают ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 28
                                                }, this),
                                                " за спокойствие ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 49
                                                }, this),
                                                " и надёжность"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                            lineNumber: 67,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.avito.ru/vladimir/predlozheniya_uslug/usluga_trezvyy_voditel_33_3099755999?context=H4sIAAAAAAAA_wE_AMD_YToyOntzOjEzOiJsb2NhbFByaW9yaXR5IjtiOjA7czoxOiJ4IjtzOjE2OiJ1TFNiczFBUzJVQ2FSbzc3Ijt9TubF_z8AAAA",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: " group inline-flex items-center overflow-hidden rounded-xl bg-black text-white hover:bg-black hover:text-white transition-all duration-300 ease-out h-16 md:h-12 px-4 md:px-6 hover:pr-4 ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "body-medium",
                                                    children: "Смотреть все отзывы"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: " ml-0 max-w-0 opacity-0 transition-all duration-300 ease-out group-hover:ml-3 group-hover:max-w-[40px] group-hover:opacity-100 flex items-center ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$logo$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$5c$u$7b$306$7d$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$avito$2d$logo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                        alt: "Avito",
                                                        className: "h-6 w-auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 5
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 3
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                            lineNumber: 72,
                                            columnNumber: 12
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 md:mt-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scroll("left"),
                                            className: "w-16 h-16 md:w-10 md:h-10 rounded-full bg-[#E9E5E5] text-black hover:bg-white/20 transition",
                                            children: "←"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                            lineNumber: 117,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scroll("right"),
                                            className: "w-16 h-16 md:w-10 md:h-10 rounded-full bg-[#E9E5E5] text-black hover:bg-white/20 transition",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                            lineNumber: 123,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                    lineNumber: 116,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollerRef,
                    className: "flex gap-4 overflow-x-auto no-scrollbar pb-4",
                    children: REVIEWS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#E9E5E5] min-w-[360px] max-w-[360px] rounded-2xl p-6 flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2d$black$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$5c$u$7b$306$7d$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$public$2f$icons$2f$stars$2d$black$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                        alt: "rating",
                                        className: "h-4 w-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black body-text mb-6",
                                    children: r.text
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mt-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-xl bg-accent text-black flex items-center justify-center",
                                            children: r.name[0]
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-black body-text",
                                                    children: r.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-black/50 caption",
                                                    children: r.company
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, r.id, true, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/development/мой_водитель_33/components/Reviews.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(ReviewsSection, "Vj1mQ92rMXBGXhT22Koqyz3PHFE=");
_c = ReviewsSection;
var _c;
__turbopack_context__.k.register(_c, "ReviewsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/development/мой_водитель_33/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-black w-full pt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 md:mx-4 lg:mx-12 flex flex-col items-start text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "heading mb-10 text-light",
                        children: "Связаться с нами:"
                    }, void 0, false, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-start space-y-1 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:+79203669096",
                                className: "text-light/90 hover:text-light transition-colors text-xl md:text-2xl",
                                children: "+7 (920) 366-90-96"
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:gramzo33rus@gmail.com",
                                className: "text-light/90 hover:text-light transition-colors text-xl md:text-2xl",
                                children: "gramzo33rus@gmail.com"
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "pt-8 text-light/60 hover:text-light transition-colors text-md md:text-xl underline underline-offset-2 cursor-pointer",
                                href: "/privacy",
                                children: "Политика конфиденциальности"
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                                lineNumber: 31,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 flex items-center space-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.instagram.com/myvoditel33",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "transform transition-all duration-200 hover:scale-110",
                                title: "Перейти в Instagram",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/icons/instagram-v2.svg",
                                    alt: "Instagram",
                                    className: "w-12 h-12 md:w-10 md:h-10"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://t.me/Gramzo33",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "transform transition-all duration-200 hover:scale-110",
                                title: "Перейти в Telegram",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/icons/telegram-v2.svg",
                                    alt: "Telegram",
                                    className: "w-12 h-12 md:w-10 md:h-10"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://vk.com/moyvoditel33",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "transform transition-all duration-200 hover:scale-110",
                                title: "Перейти на страницу ВК",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/icons/vk-v2.svg",
                                    alt: "VK",
                                    className: "w-12 h-12 md:w-10 md:h-10"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start mt-24 py-4 px-4 md:px-4 lg:px-12 border-light/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row flex-wrap gap-2 text-micro text-light/60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "",
                            children: "© 2026 Индивидуальный предприниматель Алексеев Константин Юрьевич"
                        }, void 0, false, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                            lineNumber: 84,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hidden md:block",
                            children: " | "
                        }, void 0, false, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                            lineNumber: 85,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "",
                            children: "ИНН: 332710259344"
                        }, void 0, false, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                            lineNumber: 86,
                            columnNumber: 5
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "",
                            children: " | "
                        }, void 0, false, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                            lineNumber: 87,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "",
                            children: "ОГРНИП: 325330000063900"
                        }, void 0, false, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                            lineNumber: 88,
                            columnNumber: 5
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                    lineNumber: 83,
                    columnNumber: 3
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
                lineNumber: 82,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/development/мой_водитель_33/components/Footer.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImpactPanels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/development/мой_водитель_33/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// components/ImpactPanels.tsx
"use client";
;
;
const PANELS = [
    {
        id: 1,
        title: "5 лет",
        subtitle: "существует наш сервис. Мы имеем опыт, а значит, знаем, как качественно выполнить заказ.",
        color: "bg-accent",
        image: "/images/panel-1.jpg"
    },
    {
        id: 2,
        title: "2000+ заказов",
        subtitle: "мы уже выполнили. У нас регулярно заказывают услуги водителей и перегона автомобилей.",
        color: "bg-accent2",
        image: "/images/panel-2.jpg"
    },
    {
        id: 3,
        title: "50+ клиентов",
        subtitle: "обращались к нам 2 и более раз. Мы вызываем доверие и обретаем постоянных клиентов.",
        color: "bg-[#003262]",
        image: "/images/panel-3.jpg"
    },
    {
        id: 4,
        title: "40+ водителей",
        subtitle: "работает с нами. У нас всегда есть свободные сотрудники, поэтому мы быстро реагируем на заказ.",
        color: "bg-black",
        image: "/images/panel-4.jpg"
    }
];
function ImpactPanels() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "p-4 md:p-8 lg:p-12 bg-light w-full flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:w-[500px] flex flex-col justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-black flex items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-2xl",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                                    lineNumber: 47,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-black text-sm font-medium",
                                    children: "О нас"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                                    lineNumber: 50,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                            lineNumber: 46,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-black heading mb-12",
                            children: [
                                "Результаты ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                " в цифрах"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col md:flex-row gap-4",
                children: PANELS.map((panel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " relative w-full h-56 lg:h-[500px] rounded-2xl overflow-hidden group ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 ${panel.color}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                                lineNumber: 79,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: panel.image,
                                alt: "",
                                fill: true,
                                className: " object-cover transition-opacity duration-500 opacity-100 "
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                                lineNumber: 82,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/50"
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                                lineNumber: 94,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 h-full flex items-end p-4 md:p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[320px] text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "heading text-5xl",
                                            children: panel.title
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                                            lineNumber: 100,
                                            columnNumber: 11
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$development$2f_43c$$_43e$$_438$$_306$_$_432$$_43e$$_434$$_438$$_442$$_435$$_43b$$_44c$_33$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 body-text",
                                            children: panel.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                                            lineNumber: 101,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                                    lineNumber: 99,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                                lineNumber: 98,
                                columnNumber: 7
                            }, this)
                        ]
                    }, panel.id, true, {
                        fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                        lineNumber: 67,
                        columnNumber: 5
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
                lineNumber: 65,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/development/мой_водитель_33/components/ImpactPanels.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(ImpactPanels, "UiziKGcot5E8nbuQQ2ZlRLdhk5k=");
_c = ImpactPanels;
var _c;
__turbopack_context__.k.register(_c, "ImpactPanels");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_development_%D0%BC%D0%BE%D0%B8%CC%86_%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_33_1c05479d._.js.map