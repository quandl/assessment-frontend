import Mixin from '@ember/object/mixin';
import Ember from 'ember';

export default Mixin.create({
    _styleCanvas: function() {
        var _getProperties = this.getProperties("canvas", "limit")
          , canvas = _getProperties.canvas
          , limit = _getProperties.limit
          , fontStack = "'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        canvas.attributes.maxPixelRatio = 2,
        canvas.attributes.allowColumnReordering = !1,
        canvas.attributes.allowSorting = !1,
        canvas.attributes.showRowHeaders = !Ember.isNone(limit) && 0 == limit,
        canvas.attributes.editable = !1,
        canvas.attributes.selectionFollowsActiveCell = !0,
        canvas.attributes.showOrderByOption = !1,
        canvas.attributes.showClearSettingsOption = !1,
        canvas.attributes.columnHeaderClickBehavior = "select",
        canvas.attributes.allowRowResize = !1,
        canvas.style.cellWidth = 130,
        canvas.style.gridBackgroundColor = "rgba(255, 255, 255, 1)",
        canvas.style.gridBorderWidth = 0,
        canvas.style.cellBorderWidth = .5,
        canvas.style.activeCellBorderWidth = .5,
        canvas.style.activeCellOverlayBorderWidth = .5,
        canvas.style.columnHeaderCellBorderWidth = .5,
        canvas.style.selectionOverlayBorderWidth = .5,
        canvas.style.rowHeaderCellBorderWidth = .5,
        canvas.style.cellFont = "12px " + fontStack,
        canvas.style.activeCellFont = "12px " + fontStack,
        canvas.style.columnHeaderCellFont = "14px " + fontStack,
        canvas.style.rowHeaderCellFont = "12px " + fontStack,
        canvas.style.rowHeaderCellHorizontalAlignment = "right"
    }
});
