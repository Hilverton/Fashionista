import { TOGGLE_SIDEBAR } from '../actions';

export function toggleSidebar(sidebar) {
    return {
        type: TOGGLE_SIDEBAR,
        sidebar,
    }
}