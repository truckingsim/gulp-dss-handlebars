var options = {
    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @deprecated Since version `1.2.0`, see: {@link $.fn.ajaxSelectPicker.defaults#preprocessData}.
     * @cfg {Function} ajaxResultsPreHook
     */

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Object} ajax (required)
     * @markdown
     * The options to pass to the jQuery AJAX request.
     *
     * ```js
     * {
     *     url: null, // Required.
     *     type: 'POST',
     *     dataType: 'json',
     *     data: {
     *         q: '{{{q}}}'
     *     }
     * }
     * ```
     */
    ajax: {
        url: null,
        type: 'POST',
        dataType: 'json',
        data: {
            q: '{{{q}}}'
        }
    },

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {String} ajaxSearchUrl
     * @deprecated Since version `1.2.0`, see: {@link $.fn.ajaxSelectPicker.defaults#ajax}.
     */

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {String} bindEvent = "keyup"
     * @markdown
     * The event to bind on the search input element to fire a request.
     */
    bindEvent: 'keyup',

    /**
     * @member $.fn.ajaxSelectPicker.defaults
     * @cfg {Boolean} cache = true
     * @markdown
     * Cache previous requests. If enabled, the "enter" key (13) is enabled to
     * allow users to force a refresh of the request.
     */
    cache: true,
};
