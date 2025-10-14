import { AppWrapperRoute, defineWebApplication } from '@ownclouders/web-pkg'
import App from './App.vue'

export default defineWebApplication({
    setup({ applicationConfig }) {
        const appId = '360-viewer'

        const appInfo = {
            name: '360 Viewer',
            id: appId,
            icon: 'resource-type-360',
            iconFillType: 'fill',
            iconColor: 'var(--oc-color-icon-360)',
            extensions: [
                {
                    extension: 'jpg',
                    label: 'Open in 360 Viewer',
                    routeName: appId,
                    canBeDefault: true,
                }
            ]
        }

        const routes = [
            {
                name: appId,
                path: '/:driveAliasAndItem(.*)?',
                component: AppWrapperRoute(App, {
                    applicationId: appId,
                    urlForResourceOptions: {
                        disposition: 'inline'
                    }
                }),
                meta: {
                    authContext: 'hybrid',
                    title: '360 Viewer',
                    patchCleanPath: true
                }
            }
        ]

        return {
            appInfo,
            routes
        }
    }
})