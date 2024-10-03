const SF_PAYMENTS_PRODUCTION_HOST = 'https://payments.salesforce.com';
const SF_PAYMENTS_DEVELOPMENT_HOST = 'https://payments.salesforce.com';
const SF_PAYMENTS_ACTIVE_HOST = SF_PAYMENTS_DEVELOPMENT_HOST;
const SF_PAYMENTS_METADATA_URL = SF_PAYMENTS_ACTIVE_HOST + '/metadata/v5.json';

export const SF_PAYMENTS_SDK_URL = SF_PAYMENTS_ACTIVE_HOST + '/v5/sfp.js';

export function calculateFontSize(style, property) {
    const value = style.getPropertyValue(property);
    let relativeValue;
    if (!value) {
        return '';
    } else if (value.endsWith('px')) {
        return value;
    } else if (value.endsWith('rem')) {
        relativeValue = Number(value.substring(0, value.length - 3));
    } else if (value.endsWith('em')) {
        relativeValue = Number(value.substring(0, value.length - 2));
    } else {
        relativeValue = Number(value);
    }
    return (13.0 * relativeValue) / 0.8125 + 'px';
}

function buildCGXTheme(var_, calculateFontSize_) {
    const brand = var_('--ref-g-brand', '#1C1C1C');
    const brand1 = var_('--ref-g-brand-1', '#0176d3');
    const brandContrast1 = var_('--ref-g-brand-contrast', '#FFF');
    const colorTextWeak = var_('--ref-c-text-color-weak', '#7C7E81');
    const destructive = var_('--ref-g-destructive', '#c23934');
    const formElementLabelColor = var_('--ref-s-form-element-label-color', colorTextWeak);
    const formElementRadiusBorder = var_(
        '--ref-c-input-radius-border',
        var_('--ref-s-form-element-radius-border', '4px')
    );
    const formElementWidthBorder = var_(
        '--ref-c-input-radius-border',
        var_('--ref-s-form-element-width-border', '1px')
    );
    const neutral = var_('--ref-g-neutral', '#ecebea');
    const neutral3 = var_('--ref-g-neutral-3', '#76716b');
    const root = var_('--ref-g-root', '#FFF');
    const rootContrast = var_('--ref-g-root-contrast', '#1C1C1C');
    const formElementColor = var_('--ref-c-input-text-color', var_('--ref-s-form-element-text-color', rootContrast));
    const formElementColorBackground = var_(
        '--ref-c-input-color-background',
        var_('--ref-s-form-element-color-background', root)
    );
    const formElementColorBorder = var_('--ref-c-input-border-color', '#707275');
    const formElementFocusColorBackground = var_(
        '--ref-c-input-color-background-focus',
        var_('--ref-s-form-element-color-background-active', formElementColorBackground)
    );
    const formElementInvalidBorder =
        var_('--ref-c-input-width-border', formElementWidthBorder) + ' solid ' + destructive;
    return {
        type: 'cgx',
        mode: 'light',
        fonts: [
            {
                linkHref:
                    'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
            },
        ],
        designTokens: {
            'font-family': var_('--ref-s-body-font-family', 'Poppins'),
            'font-size-2': '12px',
            'font-size-3': '13px',
            'font-size-4': '14px',
            'font-size-5': '16px',
            'font-size-6': '18px',
            'font-weight-regular': var_('--ref-s-body-font-weight', '400'),
            'font-weight-bold': var_('--ref-c-strong-text-weight', '700'),
            'line-height-text': var_('--ref-s-body-line-height', '1.28'),
            'color-text-default': var_('--ref-s-body-text-color', rootContrast),
            'color-text-error': destructive,
            'color-text-placeholder': var_('--ref-c-placeholder-text-color', neutral3),
            'color-text-tooltip': var_(
                '--slds-c-tooltip-text-color',
                var_(
                    '--ref-c-tooltip-text-color',
                    var_('--ref-g-info-contrast', var_('--slds-g-color-neutral-base-100', '#ffffff'))
                )
            ),
            'color-text-weak': colorTextWeak,
            'color-background': root,
            'color-brand': brand,
            'color-text-brand-primary': brandContrast1,
            'color-background-error': destructive,
            'color-text-inverse': brandContrast1,
            'color-background-success': var_('--ref-g-success', '#4bca81'),
            'color-background-tooltip': var_(
                '--slds-c-tooltip-color-background',
                var_(
                    '--ref-c-tooltip-color-background',
                    var_('--ref-g-info', var_('--slds-g-color-brand-base-20', '#16325c'))
                )
            ),
            'color-background-warning': var_('--ref-g-warning', '#ffb75d'),
            'color-text-icon-default': var_(
                '--ref-c-icon-color-foreground-default',
                var_('--ref-g-neutral-3', var_('--slds-g-color-neutral-base-50', '#76716b'))
            ),
            'color-background-row-hover': var_('--ref-s-dropdown-color-background-hover', '#D9DFE7'),
            'color-border-input': formElementColorBorder,
            'palette-neutral-75': var_('--ref-g-neutral-1', var_('--slds-g-color-neutral-base-75', '#d9d7d5')),
            'palette-neutral-95': var_('--ref-g-neutral', var_('--slds-g-color-neutral-base-95', '#ecebea')),
            'border-radius-medium': formElementRadiusBorder,
            'border-radius-small': formElementRadiusBorder,
            'spacing-large': var_('--ref-g-spacing-large', '1.5rem'),
            'spacing-medium': var_('--ref-g-spacing-medium', '1rem'),
            'spacing-small': var_('--ref-g-spacing-small', '0.75rem'),
            'spacing-x-large': var_('--ref-g-spacing-xlarge', '2rem'),
            'spacing-x-small': var_('--ref-g-spacing-xsmall', '0.5rem'),
            'spacing-xx-small': var_('--ref-g-spacing-xxsmall', '0.25rem'),
            'spacing-xxx-small': var_('--ref-g-spacing-xxxsmall', '0.125rem'),
        },
        rules: {
            formLabel: {
                color: formElementLabelColor,
                'font-size': '14px',
                'font-weight': '400',
                margin: '0',
                padding: '0',
                transition: 'ease all .2s',
            },
            input: {
                'background-color': formElementColorBackground,
                border: var_('--ref-c-input-width-border', formElementWidthBorder) + ' solid ' + formElementColorBorder,
                'border-radius': '4px',
                'box-shadow': 'none',
                color: formElementColor,
                'font-size': calculateFontSize_(
                    '--ref-c-input-text-font-size',
                    calculateFontSize_(
                        '--ref-s-form-element-text-font-size',
                        calculateFontSize_('--ref-s-body-font-size', '14px')
                    )
                ),
                height: '56px',
                'line-height': '1.875rem',
                padding: '0 12px',
                transition: 'border .1s linear,background-color .1s linear',
                focus: {
                    'background-color': formElementFocusColorBackground,
                    border:
                        var_('--ref-c-input-width-border', formElementWidthBorder) +
                        ' solid ' +
                        var_('--ref-c-input-active-border-color', '#177eab'),
                    'box-shadow': 'none',
                    color: var_(
                        '--ref-c-input-text-color-focus',
                        var_(
                            '--ref-s-form-element-text-color-focus',
                            var_('--ref-s-form-element-text-color', rootContrast)
                        )
                    ),
                    outline: '0',
                },
                invalid: {
                    'background-color': formElementColorBackground,
                    border: formElementInvalidBorder,
                    'box-shadow': destructive + ' 0 0 0 1px inset',
                    color: formElementColor,
                    focus: {
                        'background-color': formElementFocusColorBackground,
                        border: formElementInvalidBorder,
                    },
                },
            },
            checkbox: {
                'background-color': formElementColorBackground,
                border:
                    var_('--ref-c-checkbox-width-border', formElementWidthBorder) +
                    ' solid ' +
                    var_('--ref-c-checkbox-color-border', formElementColorBorder),
                'border-radius': var_('--ref-c-checkbox-radius-border', formElementRadiusBorder),
                transition: 'border .1s linear,background-color .1s linear',
                focus: {
                    border:
                        var_('--ref-c-checkbox-width-border', formElementWidthBorder) +
                        ' solid ' +
                        var_(
                            '--slds-c-checkbox-color-border-focus',
                            var_(
                                '--ref-c-checkbox-color-border-focus',
                                var_(
                                    '--ref-s-form-checkbox-color-border-checked',
                                    var_('--ref-s-form-element-color-border-focus', brand)
                                )
                            )
                        ),
                    'box-shadow': var_(
                        '--slds-c-checkbox-shadow-focus',
                        '0 0 3px ' + var_('--ref-g-brand-1', var_('--ref-c-checkbox-shadow-focus', brand1))
                    ),
                    outline: '1px solid ' + var_('--slds-g-color-brand-base-80', '#aacbff'),
                },
            },
            checkboxLabel: {
                color: formElementLabelColor,
                'font-size':
                    calculateFontSize_('--ref-s-form-element-label-font-size', '') ||
                    calculateFontSize_('--ref-s-body-font-size', '14px'),
                padding: '0 0 0 8px',
            },
            button: {
                'background-color': var_('--ref-c-button-outline-brand-color-background', root),
                border:
                    var_('--slds-c-button-sizing-border', var_('--ref-c-button-sizing-border', '1px')) +
                    ' solid ' +
                    var_('--ref-c-button-outline-brand-color-border', var_('--ref-s-button-color', brand)),
                'border-radius': var_('--ref-c-button-radius-border', var_('--ref-s-button-radius-border', '.25em')),
                'box-shadow': var_('--slds-c-button-shadow', var_('--ref-c-button-shadow', 'none')),
                color: var_('--ref-c-button-text-color', var_('--ref-s-button-color', brand1)),
                'font-family': var_('--ref-s-button-font-family', 'Poppins'),
                'font-size': calculateFontSize_('--ref-s-button-font-size', '14px'),
                'font-weight': var_('--ref-s-button-font-weight', '600'),
                'line-height': var_('--ref-s-button-line-height', '2'),
                padding:
                    var_('--slds-c-button-spacing-block-start', var_('--ref-c-button-spacing-block-start', '0')) +
                    ' ' +
                    var_('--ref-s-button-padding', '1em') +
                    ' ' +
                    var_('--slds-c-button-spacing-block-end', var_('--ref-c-button-spacing-block-end', '0')) +
                    ' ' +
                    var_('--ref-s-button-padding', '1em'),
                transition: var_('--ref-c-button-outline-brand-transition', 'border 0.15s linear'),
                focus: {
                    'background-color': var_(
                        '--ref-c-button-secondary-color-background-active',
                        var_('--ref-c-button-color-background-active', var_('--ref-g-root-1', '#ebebeb'))
                    ),
                    border:
                        var_('--slds-c-button-sizing-border', var_('--ref-c-button-sizing-border', '1px')) +
                        ' solid ' +
                        var_(
                            '--ref-c-button-secondary-color-border-active',
                            var_('--ref-c-button-color-border-active', var_('--ref-s-button-color-active', brand1))
                        ),
                    'box-shadow': var_(
                        '--ref-c-button-shadow-focus',
                        '0 0 3px ' + var_('--ref-s-button-color-focus', brand1)
                    ),
                    color: var_(
                        '--ref-c-button-secondary-color-active',
                        var_('--ref-c-button-color-active', var_('--ref-s-button-color-active', brand1))
                    ),
                    outline: '0',
                },
                hover: {
                    'background-color': var_(
                        '--ref-c-button-secondary-color-background-active',
                        var_('--ref-c-button-color-background-active', var_('--ref-g-root-1', '#ebebeb'))
                    ),
                    border:
                        var_('--slds-c-button-sizing-border', var_('--ref-c-button-sizing-border', '1px')) +
                        ' solid ' +
                        var_(
                            '--ref-c-button-secondary-color-border-active',
                            var_('--ref-c-button-color-border-active', var_('--ref-s-button-color-active', brand1))
                        ),
                    color: var_(
                        '--ref-c-button-secondary-color-active',
                        var_('--ref-c-button-color-active', var_('--ref-s-button-color-active', brand1))
                    ),
                    'text-decoration': var_('--ref-s-button-text-decoration-hover', 'none'),
                },
                active: {
                    'background-color': var_(
                        '--ref-c-button-secondary-color-background-active',
                        var_('--ref-c-button-color-background-active', var_('--ref-g-root-1', '#ebebeb'))
                    ),
                    border:
                        var_('--slds-c-button-sizing-border', var_('--ref-c-button-sizing-border', '1px')) +
                        ' solid ' +
                        var_(
                            '--ref-c-button-secondary-color-border-active',
                            var_('--ref-c-button-color-border-active', var_('--ref-s-button-color-active', brand1))
                        ),
                    color: var_(
                        '--ref-c-button-secondary-color-active',
                        var_('--ref-c-button-color-active', var_('--ref-s-button-color-active', brand1))
                    ),
                },
            },
            picklist: {
                'background-color': var_('--ref-s-dropdown-color-background', root),
                border: var_('--ref-c-input-width-border', formElementWidthBorder) + ' solid ' + formElementColorBorder,
                'border-radius': formElementRadiusBorder,
                color: formElementColor,
                transition: 'border .1s linear,background-color .1s linear',
            },
            picklistOption: {
                'background-color': var_('--ref-s-dropdown-color-background', root),
                border: 'none',
                color: var_('--ref-s-dropdown-text-color', rootContrast),
                padding:
                    var_(
                        '--slds-c-input-spacing-horizontal-start',
                        var_('--ref-c-input-spacing-horizontal-start', '.75rem')
                    ) +
                    ' ' +
                    var_('--slds-c-input-spacing-horizontal-end', var_('--ref-c-input-spacing-horizontal-end', '1rem')),
                hover: {
                    'background-color': var_('--ref-s-dropdown-color-background-hover', neutral),
                    'text-decoration': 'none',
                },
            },
            error: {
                color: destructive,
                'font-size': calculateFontSize_('--ref-s-body-small-font-size', '12px'),
                margin: '0.125rem 0 0 0',
            },
            card: {
                border:
                    var_('--ref-c-checkout-section-accordion-separators-summary-border-width', '1px') +
                    ' ' +
                    var_('---ref-c-checkout-section-accordion-separators-summary-border-style', 'solid') +
                    ' ' +
                    var_('--ref-c-checkout-section-accordion-separators-summary-border-color', '#707275'),
                'border-radius': var_('--ref-c-checkout-section-accordion-separators-summary-border-radius', '0.25rem'),
                padding: var_('--ref-g-spacing-large', '1.5rem'),
                margin: var_('--ref-g-spacing-medium', '1rem') + ' 0 0 0',
            },
        },
    };
}

function buildSLDSTheme(var_, calculateFontSize_) {
    const brand = var_('--ref-g-brand', '#005fb2');
    const brandContrast1 = var_('--ref-g-brand-contrast-1', '#ffffff');
    const destructive = var_('--ref-g-destructive', '#c23934');
    const formElementLabelColor = var_('--ref-s-form-element-label-color', var_('--ref-g-root-contrast', '#1a1b1e'));
    const formElementRadiusBorder = var_('--ref-s-form-element-radius-border', '4px');
    const formElementWidthBorder = var_('--ref-s-form-element-width-border', '1px');
    const formLabelFontSize = calculateFontSize_(
        '--ref-s-form-element-label-font-size',
        calculateFontSize_('--ref-s-body-font-size', '13px')
    );
    const neutral = var_('--ref-g-neutral', '#ecebea');
    const neutral3 = var_('--ref-g-neutral-3', '#76716b');
    const root = var_('--ref-g-root', '#ffffff');
    const rootContrast = var_('--ref-g-root-contrast', '#1a1b1e');
    const formElementColorBackground = var_('--ref-s-form-element-color-background', root);
    const formElementColorBorder = var_('--ref-s-form-element-color-border', neutral3);
    return {
        type: 'slds',
        mode: 'light',
        designTokens: {
            'font-family': var_('--ref-g-body-font-family', 'Salesforce Sans'),
            'font-size-2': '12px',
            'font-size-3': '13px',
            'font-size-4': '14px',
            'font-size-5': '16px',
            'font-size-6': '18px',
            'font-weight-regular': var_('--ref-s-body-font-weight', '400'),
            'font-weight-bold': var_('--ref-c-strong-text-weight', '700'),
            'line-height-text': var_('--ref-s-body-line-height', '1.5'),
            'color-text-default': var_('--ref-s-body-text-color', rootContrast),
            'color-text-error': destructive,
            'color-text-placeholder': var_('--ref-c-placeholder-text-color', neutral3),
            'color-text-tooltip': var_(
                '--slds-c-tooltip-text-color',
                var_(
                    '--ref-c-tooltip-text-color',
                    var_('--ref-g-info-contrast', var_('--slds-g-color-neutral-base-100', '#fff'))
                )
            ),
            'color-text-weak': neutral3,
            'color-background': root,
            'color-brand': brand,
            'color-text-brand-primary': brandContrast1,
            'color-background-error': destructive,
            'color-text-inverse': brandContrast1,
            'color-background-success': var_('--ref-g-success', '#4bca81'),
            'color-background-tooltip': var_(
                '--slds-c-tooltip-color-background',
                var_(
                    '--ref-c-tooltip-color-background',
                    var_('--ref-g-info', var_('--slds-g-color-brand-base-20', '#032d60'))
                )
            ),
            'color-background-warning': var_('--ref-g-warning', '#ffb75d'),
            'color-text-icon-default': var_(
                '--ref-c-icon-color-foreground-default',
                var_('--ref-g-neutral-3', var_('--slds-g-color-neutral-base-50', '#747474'))
            ),
            'color-background-row-hover': var_('--ref-s-dropdown-color-background-hover', neutral3),
            'color-border-input': neutral3,
            'palette-neutral-75': var_('--ref-g-neutral-1', var_('--slds-g-color-neutral-base-75', '#d9d7d5')),
            'palette-neutral-95': var_('--ref-g-neutral', var_('--slds-g-color-neutral-base-95', '#f3f3f3')),
            'border-radius-medium': formElementRadiusBorder,
            'border-radius-small': formElementRadiusBorder,
            'spacing-large': var_('--ref-g-spacing-large', '1.5rem'),
            'spacing-medium': var_('--ref-g-spacing-medium', '1rem'),
            'spacing-small': var_('--ref-g-spacing-small', '0.75rem'),
            'spacing-x-large': var_('--ref-g-spacing-xlarge', '2rem'),
            'spacing-x-small': var_('--ref-g-spacing-xsmall', '0.5rem'),
            'spacing-xx-small': var_('--ref-g-spacing-xxsmall', '0.25rem'),
            'spacing-xxx-small': var_('--ref-g-spacing-xxxsmall', '0.125rem'),
        },
        rules: {
            formLabel: {
                color: formElementLabelColor,
                'font-size': formLabelFontSize,
                margin: '0 0 0.125rem 0',
                padding: '0 .5rem 0 0',
            },
            input: {
                'background-color': formElementColorBackground,
                border: var_('--ref-c-input-width-border', formElementWidthBorder) + ' solid ' + formElementColorBorder,
                'border-radius': formElementRadiusBorder,
                'box-shadow': var_('--slds-c-input-shadow', var_('--ref-c-input-shadow', 'none')),
                color: var_('--ref-s-form-element-text-color', rootContrast),
                'line-height': '1.875rem',
                padding:
                    '0 ' +
                    var_(
                        '--slds-c-input-spacing-horizontal-start',
                        var_('--ref-c-input-spacing-horizontal-start', '12px')
                    ) +
                    ' 0 ' +
                    var_(
                        '--slds-c-input-spacing-horizontal-start',
                        var_('--ref-c-input-spacing-horizontal-start', '12px')
                    ),
                transition: 'border .1s linear,background-color .1s linear',
                focus: {
                    'background-color': var_(
                        '--ref-s-form-element-color-background-active',
                        formElementColorBackground
                    ),
                    border:
                        var_('--ref-c-input-width-border', var_('--ref-s-form-element-width-border', '1px')) +
                        ' solid ' +
                        var_(
                            '--ref-c-input-color-border-focus',
                            var_('--ref-s-form-element-color-border-focus', brand)
                        ),
                    'box-shadow': var_(
                        '--slds-c-input-shadow-focus',
                        '0 0 3px ' + var_('--ref-g-brand-1', var_('--ref-c-input-shadow-focus', '#004989'))
                    ),
                    color: var_(
                        '--ref-c-input-text-color-focus',
                        var_(
                            '--ref-s-form-element-text-color-focus',
                            var_('--ref-s-form-element-text-color', rootContrast)
                        )
                    ),
                    outline: '0',
                },
                invalid: {
                    'background-color': formElementColorBackground,
                    border: var_('--ref-c-input-width-border', formElementWidthBorder) + ' solid ' + destructive,
                    'box-shadow': destructive + ' 0 0 0 1px inset',
                    color: var_('--ref-s-form-element-text-color', rootContrast),
                    focus: {
                        border: var_('--ref-c-input-width-border', formElementWidthBorder) + ' solid ' + destructive,
                        'box-shadow': destructive + ' 0 0 0 1px inset',
                    },
                },
            },
            checkbox: {
                'background-color': formElementColorBackground,
                border:
                    var_('--ref-c-checkbox-width-border', formElementWidthBorder) +
                    ' solid ' +
                    var_('--ref-c-checkbox-color-border', formElementColorBorder),
                'border-radius': var_('--ref-c-checkbox-radius-border', formElementRadiusBorder),
                'box-shadow': var_('--slds-c-checkbox-shadow', var_('--ref-c-checkbox-shadow', 'none')),
                transition: 'border .1s linear,background-color .1s linear',
            },
            checkboxLabel: {
                color: formElementLabelColor,
                'font-size': formLabelFontSize,
            },
            button: {
                'background-color': var_('--ref-c-button-neutral-color-background', root),
                border:
                    var_('--slds-c-button-sizing-border', var_('--ref-c-button-sizing-border', '1px')) +
                    ' solid ' +
                    var_('--ref-c-button-neutral-color-border', var_('--ref-g-neutral-1', '#aeaeae')),
                'border-radius': var_('--ref-c-button-radius-border', var_('--ref-s-button-radius-border', '.25em')),
                'box-shadow': var_('--slds-c-button-shadow', var_('--ref-c-button-shadow', 'none')),
                color: var_(
                    '--ref-c-button-text-color',
                    var_('--ref-s-button-color', var_('--ref-g-brand-1', '#0176d3'))
                ),
                'font-family': var_('--ref-s-button-font-family', 'Salesforce Sans'),
                'font-size': calculateFontSize_('--ref-s-button-font-size', '16px'),
                'font-weight': var_('--ref-s-button-font-weight', '400'),
                'line-height': var_('--ref-s-button-line-height', '2'),
                padding: '0 ' + var_('--ref-s-button-padding', '1em') + ' 0 ' + var_('--ref-s-button-padding', '1em'),
                focus: {
                    'background-color': var_(
                        '--ref-c-button-neutral-color-background-hover',
                        var_('--ref-g-root-1', '#f3f3f3')
                    ),
                    border:
                        var_('--slds-c-button-sizing-border', var_('--ref-c-button-sizing-border', '1px')) +
                        ' solid ' +
                        var_('--ref-c-button-neutral-color-border-hover', var_('--ref-g-neutral-2', '#aeaeae')),
                    'box-shadow': var_(
                        '--ref-c-button-shadow-focus',
                        '0 0 3px ' + var_('--ref-s-button-color-focus', var_('--ref-g-brand-1', '#0176d3'))
                    ),
                    color: var_(
                        '--ref-c-button-text-color-hover',
                        var_('--ref-s-button-color-hover', var_('--ref-g-brand-1', '#014486'))
                    ),
                    outline: '0',
                },
                hover: {
                    'background-color': var_(
                        '--ref-c-button-neutral-color-background-hover',
                        var_('--ref-g-root-1', '#f3f3f3')
                    ),
                    border:
                        var_('--slds-c-button-sizing-border', var_('--ref-c-button-sizing-border', '1px')) +
                        ' solid ' +
                        var_('--ref-c-button-neutral-color-border-hover', var_('--ref-g-neutral-2', '#aeaeae')),
                    color: var_(
                        '--ref-c-button-text-color-hover',
                        var_('--ref-s-button-color-hover', var_('--ref-g-brand-1', '#014486'))
                    ),
                },
                active: {
                    'background-color': var_(
                        '--ref-c-button-neutral-color-background-active',
                        var_('--ref-g-root-1', '#e5e5e5')
                    ),
                    border:
                        var_('--slds-c-button-sizing-border', var_('--ref-c-button-sizing-border', '1px')) +
                        ' solid ' +
                        var_('--ref-c-button-neutral-color-border-active', var_('--ref-g-neutral-2', '#aeaeae')),
                    color: var_(
                        '--ref-c-button-text-color-active',
                        var_('--ref-s-button-color-active', var_('--ref-g-brand-1', '#014486'))
                    ),
                },
            },
            picklist: {
                'background-color': var_('--ref-s-dropdown-color-background', root),
                border:
                    var_('--ref-c-input-width-border', formElementWidthBorder) +
                    ' solid ' +
                    var_('--ref-s-dropdown-color-border', neutral),
                'border-radius': formElementRadiusBorder,
                color: var_('--ref-s-dropdown-text-color', rootContrast),
                transition: 'border .1s linear,background-color .1s linear',
            },
            picklistOption: {
                'background-color': var_('--ref-s-dropdown-color-background', root),
                border:
                    var_('--ref-c-input-width-border', formElementWidthBorder) +
                    ' solid ' +
                    var_('--ref-s-dropdown-color-border', neutral),
                color: var_('--ref-s-dropdown-text-color', rootContrast),
                padding: '.5rem .75rem',
                hover: {
                    'background-color': var_('--ref-s-dropdown-color-background-hover', neutral),
                    'text-decoration': 'none',
                },
            },
            error: {
                color: destructive,
                'font-size': calculateFontSize_('--ref-s-body-small-font-size', '12px'),
                margin: '0.125rem 0 0 0',
            },
        },
    };
}

export function buildTheme(container) {
    const style = globalThis.getComputedStyle?.(container);
    const themeVersion = Number(style.getPropertyValue('--ref-c-theme-version') || '1');
    const var_ = (property, fallback) => {
        const value = style.getPropertyValue(property);
        return value || fallback;
    };
    const calculateFontSize_ = (property, fallback) => {
        const value = calculateFontSize(style, property);
        return value || fallback;
    };
    if (themeVersion > 1) {
        return buildCGXTheme(var_, calculateFontSize_);
    }
    return buildSLDSTheme(var_, calculateFontSize_);
}

export function filterUnsupportedPaymentMethods(unsupportedPaymentMethods, paymentMethodSet, enableExpress) {
    let filteredPaymentMethods = paymentMethodSet?.paymentMethods;
    if (unsupportedPaymentMethods.length > 0) {
        filteredPaymentMethods = filteredPaymentMethods?.filter(
            (paymentMethod) => !unsupportedPaymentMethods.includes(paymentMethod.paymentMethodType)
        );
    }
    if (enableExpress) {
        if (filteredPaymentMethods && filteredPaymentMethods.length > 0) {
            filteredPaymentMethods = filteredPaymentMethods?.filter(
                (paymentMethod) => !paymentMethod.paymentModes.includes('Express')
            );
        }
    }
    if (paymentMethodSet && filteredPaymentMethods) {
        const paymentMethodSetCopy = {
            ...paymentMethodSet,
        };
        paymentMethodSetCopy.paymentMethods = filteredPaymentMethods;
        paymentMethodSet = paymentMethodSetCopy;
    }
    return paymentMethodSet;
}

export function loadMetadata() {
    return fetch(SF_PAYMENTS_METADATA_URL, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
}

export function createSavedPaymentMethodComparator(defaultPaymentMethodType) {
    return (item1, item2) => {
        if (item1.isDefault && item2.isDefault) {
            return 0;
        }
        if (item1.isDefault) {
            return -1;
        }
        if (item2.isDefault) {
            return 1;
        }
        const item1Type = item1.type ?? '';
        const item2Type = item2.type ?? '';
        if (item1Type === item2Type) {
            return 0;
        }
        if (item1Type === defaultPaymentMethodType) {
            return -1;
        }
        if (item2Type === defaultPaymentMethodType) {
            return 1;
        }
        return item1Type < item2Type ? -1 : 1;
    };
}
