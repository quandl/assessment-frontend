import Component from '@ember/component';
import CanvasAttributes from 'assessment-frontend/mixins/canvas-attributes';
import Ember from 'ember';

export default Component.extend(CanvasAttributes, {
    tagName: "product-data",
    classNames: ["datagrid"],
    classNameBindings: ["className"],
    ajax: Ember.inject.service(),
    canvas: null,
    type: null,
    data: null,
    columns: null,
    cursor: null,
    limit: null,
    count: 0,
    perPage: null,
    error: null,
    isInvalidError: Ember.computed.equal("error", "invalid"),
    isForbiddenError: Ember.computed.equal("error", "forbidden"),
    _lastScrollPosition: 0,
    didInsertElement: function() {
        this._super.apply(this, arguments),
        this._initializeCanvas(),
        this._styleCanvas(),
        this._addSchemaToCanvas(),
        this._addDataToCanvas()
    },
    className: Ember.computed("name", function() {
        var name = this.get("name")
        if (!Ember.isEmpty(name))
            return "canvas-datagrid--" + name
    }),
    scrollHandler: Ember.observer("cursor", function() {
        var _getProperties = this.getProperties("cursor", "limit")
          , cursor = _getProperties.cursor
          , limit = _getProperties.limit
          , isEnabled = !Ember.isBlank(cursor) || Ember.isBlank(limit)
        this._enableScrollHandler(isEnabled)
    }),
    _initializeCanvas: function() {
        var parentNode = this.$(".datagrid__container").get(0)
          , canvas = canvasDatagrid({
            parentNode: parentNode
        })
          , _getProperties2 = this.getProperties("limit", "perPage")
          , limit = _getProperties2.limit
          , perPage = _getProperties2.perPage
          , $container = this.$(".datagrid__container")
        if (!Ember.isBlank(limit) && limit > 0 ? this._setLimitedHeight(canvas, limit) : this._setMaxHeight(),
        Ember.isEmpty(perPage)) {
            var visibleRows = Math.ceil($container.outerHeight() / canvas.style.cellHeight)
              , _perPage = 10 * (parseInt(visibleRows / 10, 10) + 1)
            this.setProperties({
                perPage: _perPage
            })
        }
        canvas.addEventListener("contextmenu", function(e) {
            return e.preventDefault()
        }),
        this.set("canvas", canvas)
    },
    _addSchemaToCanvas: function() {
        var _this = this
          , _getProperties3 = this.getProperties("canvas", "columns")
          , canvas = _getProperties3.canvas
          , columns = _getProperties3.columns
        if (canvas.schema && 1 == canvas.schema.length && "" == canvas.schema[0].name) {
            var schema = columns.map(function(column) {
                return _this._convertColumnToSchema(column)
            })
            this.set("columns", schema),
            canvas.schema = schema
        }
    },
    _convertColumnToSchema: function(column) {
        return "string" != Ember.typeOf(column) && (column = column.name),
        {
            name: column.toLowerCase()
        }
    },
    _addDataToCanvas: function() {
        var _getProperties7 = this.getProperties("canvas", "columns", "data")
          , canvas = _getProperties7.canvas
          , schema = _getProperties7.columns
          , records = _getProperties7.data
          , data = this._convertRecordsToSchema(schema, records)
        Ember.isEmpty(canvas.data) ? canvas.data = data : canvas.data = canvas.data.concat(data),
        this._updateRecordCount()
    },
    _convertRecordsToSchema: function(schema, records) {
        return records.map(function(record) {
            return record.reduce(function(result, el, n) {
                return result[schema[n].name] = el,
                result
            }, {})
        })
    },
    _canvasScrollEvent: function(event) {
        var currentScrollPosition = event.top
          , _getProperties8 = this.getProperties("cursor")
          , cursor = _getProperties8.cursor
        if (!Ember.isEmpty(cursor) && 0 != currentScrollPosition) {
            this.set("_lastScrollPosition", currentScrollPosition)
        }
    },
    _updateRecordCount: function() {
        var canvas = this.get("canvas")
          , length = Ember.isArray(canvas.data) ? canvas.data.length : 0
        this.set("count", length)
    },
    _enableScrollHandler: function(shouldListen) {
        var scrollHandler = this._canvasScrollEvent.bind(this)
          , canvas = this.get("canvas")
        shouldListen ? canvas.addEventListener("scroll", scrollHandler) : canvas.removeEventListener("scroll", scrollHandler)
    },
    _setLimitedHeight: function(canvas, limit) {
        var _canvas$style = canvas.style
          , cellHeight = _canvas$style.cellHeight
          , columnHeaderCellHeight = _canvas$style.columnHeaderCellHeight
          , columnHeaderCellBorderWidth = _canvas$style.columnHeaderCellBorderWidth
          , cellBorderWidth = _canvas$style.cellBorderWidth
          , canvasHeight = cellHeight * limit + columnHeaderCellHeight + 2 * columnHeaderCellBorderWidth + cellBorderWidth
        canvas.attributes.snapToRow = !0,
        this._setHeight(canvasHeight + 15)
    },
    _setMaxHeight: function() {
        var $container = this.$(".datagrid__container")
          , containerHeight = $container.parent().parent().height()
          , gridHeight = $container.parent().siblings().toArray().reduce(function(diff, el) {
            return diff - Ember.$(el).outerHeight()
        }, containerHeight)
        this._setHeight(gridHeight)
    },
    _setHeight: function(height) {
        this.$("canvas-datagrid").outerHeight(height),
        this.$(".datagrid__container").outerHeight(height)
    }
});
