# MenuTitle: Add Extremes to Selection
# -*- coding: utf-8 -*-
from __future__ import division, print_function, unicode_literals
__doc__ = """
Adds extreme points to selected segments
"""

from GlyphsApp import Glyphs, GSPath

thisLayer = Glyphs.font.selectedLayers[0]


for path in thisLayer.paths:
	path.addNodesAtExtremes(False, True)