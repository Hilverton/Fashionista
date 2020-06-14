export function handleString(data) {
    const reg = RegExp(' ', 'g');
    return data.name.replace(reg, '-').toLowerCase();
}

export function handleObj(product, tamSelected) {
    let { name, image, actual_price, code_color, discount_percentage, regular_price, installments, on_sale } = product;
    const new_actual_price = actual_price.replace('R$', '').replace(',', '.').trim();
    actual_price = parseFloat(new_actual_price);
    code_color += tamSelected;
    const qtd = 1;
    const obj = {
      code_color, name, image, actual_price, qtd, size: tamSelected, on_sale, discount_percentage, regular_price, installments
    };
    return obj;
}