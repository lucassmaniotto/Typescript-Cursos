export function domInject(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
        });
    };
}
//# sourceMappingURL=dom-injector.js.map