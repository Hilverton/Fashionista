import { TOGGLE_THEME } from '../actions';

export function toggleTheme(theme) {
    return {
        type: TOGGLE_THEME,
        theme
    }
}