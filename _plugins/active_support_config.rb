# Fix ActiveSupport timezone deprecation warning
require 'active_support'
ActiveSupport.to_time_preserves_timezone = true