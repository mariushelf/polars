(function() {var implementors = {};
implementors["ahash"] = [{"text":"impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ahash/struct.AHashMap.html\" title=\"struct ahash::AHashMap\">AHashMap</a>&lt;K, V, S&gt;","synthetic":false,"types":["ahash::hash_map::AHashMap"]},{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T, S&gt;","synthetic":false,"types":["ahash::hash_set::AHashSet"]}];
implementors["alloc_no_stdlib"] = [{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"alloc_no_stdlib/struct.AllocatedStackMemory.html\" title=\"struct alloc_no_stdlib::AllocatedStackMemory\">AllocatedStackMemory</a>&lt;'a, T&gt;","synthetic":false,"types":["alloc_no_stdlib::allocated_stack_memory::AllocatedStackMemory"]}];
implementors["anyhow"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>","synthetic":false,"types":["anyhow::Error"]}];
implementors["arrow2"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"arrow2/buffer/struct.Buffer.html\" title=\"struct arrow2::buffer::Buffer\">Buffer</a>&lt;T&gt;","synthetic":false,"types":["arrow2::buffer::immutable::Buffer"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"arrow2/chunk/struct.Chunk.html\" title=\"struct arrow2::chunk::Chunk\">Chunk</a>&lt;A&gt;","synthetic":false,"types":["arrow2::chunk::Chunk"]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_epoch::atomic::Owned"]}];
implementors["crossbeam_utils"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam_utils/struct.CachePadded.html\" title=\"struct crossbeam_utils::CachePadded\">CachePadded</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_utils::cache_padded::CachePadded"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam_utils/sync/struct.ShardedLockReadGuard.html\" title=\"struct crossbeam_utils::sync::ShardedLockReadGuard\">ShardedLockReadGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["crossbeam_utils::sync::sharded_lock::ShardedLockReadGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"crossbeam_utils/sync/struct.ShardedLockWriteGuard.html\" title=\"struct crossbeam_utils::sync::ShardedLockWriteGuard\">ShardedLockWriteGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["crossbeam_utils::sync::sharded_lock::ShardedLockWriteGuard"]}];
implementors["either"] = [{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = L::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a>&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["futures_executor"] = [{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.Stream.html\" title=\"trait futures_core::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"futures_executor/struct.BlockingStream.html\" title=\"struct futures_executor::BlockingStream\">BlockingStream</a>&lt;S&gt;","synthetic":false,"types":["futures_executor::local_pool::BlockingStream"]}];
implementors["futures_task"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"futures_task/struct.WakerRef.html\" title=\"struct futures_task::WakerRef\">WakerRef</a>&lt;'_&gt;","synthetic":false,"types":["futures_task::waker_ref::WakerRef"]}];
implementors["futures_util"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"futures_util/lock/struct.MutexGuard.html\" title=\"struct futures_util::lock::MutexGuard\">MutexGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["futures_util::lock::mutex::MutexGuard"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, U:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"futures_util/lock/struct.MappedMutexGuard.html\" title=\"struct futures_util::lock::MappedMutexGuard\">MappedMutexGuard</a>&lt;'_, T, U&gt;","synthetic":false,"types":["futures_util::lock::mutex::MappedMutexGuard"]}];
implementors["lock_api"] = [{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/struct.MutexGuard.html\" title=\"struct lock_api::MutexGuard\">MutexGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::mutex::MutexGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/struct.MappedMutexGuard.html\" title=\"struct lock_api::MappedMutexGuard\">MappedMutexGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::mutex::MappedMutexGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, G:&nbsp;<a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/struct.ReentrantMutexGuard.html\" title=\"struct lock_api::ReentrantMutexGuard\">ReentrantMutexGuard</a>&lt;'a, R, G, T&gt;","synthetic":false,"types":["lock_api::remutex::ReentrantMutexGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a> + 'a, G:&nbsp;<a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/struct.MappedReentrantMutexGuard.html\" title=\"struct lock_api::MappedReentrantMutexGuard\">MappedReentrantMutexGuard</a>&lt;'a, R, G, T&gt;","synthetic":false,"types":["lock_api::remutex::MappedReentrantMutexGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/struct.RwLockReadGuard.html\" title=\"struct lock_api::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::rwlock::RwLockReadGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/struct.RwLockWriteGuard.html\" title=\"struct lock_api::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::rwlock::RwLockWriteGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLockUpgrade.html\" title=\"trait lock_api::RawRwLockUpgrade\">RawRwLockUpgrade</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/struct.RwLockUpgradableReadGuard.html\" title=\"struct lock_api::RwLockUpgradableReadGuard\">RwLockUpgradableReadGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::rwlock::RwLockUpgradableReadGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/struct.MappedRwLockReadGuard.html\" title=\"struct lock_api::MappedRwLockReadGuard\">MappedRwLockReadGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::rwlock::MappedRwLockReadGuard"]},{"text":"impl&lt;'a, R:&nbsp;<a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a> + 'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"lock_api/struct.MappedRwLockWriteGuard.html\" title=\"struct lock_api::MappedRwLockWriteGuard\">MappedRwLockWriteGuard</a>&lt;'a, R, T&gt;","synthetic":false,"types":["lock_api::rwlock::MappedRwLockWriteGuard"]}];
implementors["memmap2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"memmap2/struct.Mmap.html\" title=\"struct memmap2::Mmap\">Mmap</a>","synthetic":false,"types":["memmap2::Mmap"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"memmap2/struct.MmapMut.html\" title=\"struct memmap2::MmapMut\">MmapMut</a>","synthetic":false,"types":["memmap2::MmapMut"]}];
implementors["ndarray"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ndarray/struct.MathCell.html\" title=\"struct ndarray::MathCell\">MathCell</a>&lt;T&gt;","synthetic":false,"types":["ndarray::math_cell::MathCell"]},{"text":"impl&lt;T, Din, Dout&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ndarray/struct.SliceInfo.html\" title=\"struct ndarray::SliceInfo\">SliceInfo</a>&lt;T, Din, Dout&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Din: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Dout: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>","synthetic":false,"types":["ndarray::slice::SliceInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"ndarray/struct.IxDynImpl.html\" title=\"struct ndarray::IxDynImpl\">IxDynImpl</a>","synthetic":false,"types":["ndarray::dimension::dynindeximpl::IxDynImpl"]}];
implementors["once_cell"] = [{"text":"impl&lt;T, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"once_cell/unsync/struct.Lazy.html\" title=\"struct once_cell::unsync::Lazy\">Lazy</a>&lt;T, F&gt;","synthetic":false,"types":["once_cell::unsync::Lazy"]},{"text":"impl&lt;T, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"once_cell/sync/struct.Lazy.html\" title=\"struct once_cell::sync::Lazy\">Lazy</a>&lt;T, F&gt;","synthetic":false,"types":["once_cell::sync::Lazy"]}];
implementors["polars_core"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"polars_core/utils/struct.Wrap.html\" title=\"struct polars_core::utils::Wrap\">Wrap</a>&lt;T&gt;","synthetic":false,"types":["polars_core::utils::Wrap"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"polars_core/utils/struct.NoNull.html\" title=\"struct polars_core::utils::NoNull\">NoNull</a>&lt;T&gt;","synthetic":false,"types":["polars_core::utils::NoNull"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>, T:&nbsp;<a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"polars_core/datatypes/struct.Logical.html\" title=\"struct polars_core::datatypes::Logical\">Logical</a>&lt;K, T&gt;","synthetic":false,"types":["polars_core::chunked_array::logical::Logical"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"polars_core/frame/groupby/struct.SlicedGroups.html\" title=\"struct polars_core::frame::groupby::SlicedGroups\">SlicedGroups</a>&lt;'_&gt;","synthetic":false,"types":["polars_core::frame::groupby::proxy::SlicedGroups"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a>","synthetic":false,"types":["polars_core::series::Series"]}];
implementors["polars_io"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"enum\" href=\"polars_io/mmap/enum.ReaderBytes.html\" title=\"enum polars_io::mmap::ReaderBytes\">ReaderBytes</a>&lt;'_&gt;","synthetic":false,"types":["polars_io::mmap::ReaderBytes"]}];
implementors["polars_lazy"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"polars_lazy/dsl/struct.SpecialEq.html\" title=\"struct polars_lazy::dsl::SpecialEq\">SpecialEq</a>&lt;T&gt;","synthetic":false,"types":["polars_lazy::dsl::expr::SpecialEq"]}];
implementors["regex_syntax"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"regex_syntax/hir/literal/struct.Literal.html\" title=\"struct regex_syntax::hir::literal::Literal\">Literal</a>","synthetic":false,"types":["regex_syntax::hir::literal::Literal"]}];
implementors["scopeguard"] = [{"text":"impl&lt;T, F, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"scopeguard/struct.ScopeGuard.html\" title=\"struct scopeguard::ScopeGuard\">ScopeGuard</a>&lt;T, F, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T),<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"scopeguard/trait.Strategy.html\" title=\"trait scopeguard::Strategy\">Strategy</a>,&nbsp;</span>","synthetic":false,"types":["scopeguard::ScopeGuard"]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;","synthetic":false,"types":["smallvec::SmallVec"]}];
implementors["smartstring"] = [{"text":"impl&lt;Mode:&nbsp;<a class=\"trait\" href=\"smartstring/trait.SmartStringMode.html\" title=\"trait smartstring::SmartStringMode\">SmartStringMode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"smartstring/struct.SmartString.html\" title=\"struct smartstring::SmartString\">SmartString</a>&lt;Mode&gt;","synthetic":false,"types":["smartstring::SmartString"]}];
implementors["syn"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Underscore.html\" title=\"struct syn::token::Underscore\">Underscore</a>","synthetic":false,"types":["syn::token::Underscore"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Add.html\" title=\"struct syn::token::Add\">Add</a>","synthetic":false,"types":["syn::token::Add"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.And.html\" title=\"struct syn::token::And\">And</a>","synthetic":false,"types":["syn::token::And"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.At.html\" title=\"struct syn::token::At\">At</a>","synthetic":false,"types":["syn::token::At"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Bang.html\" title=\"struct syn::token::Bang\">Bang</a>","synthetic":false,"types":["syn::token::Bang"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Caret.html\" title=\"struct syn::token::Caret\">Caret</a>","synthetic":false,"types":["syn::token::Caret"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Colon.html\" title=\"struct syn::token::Colon\">Colon</a>","synthetic":false,"types":["syn::token::Colon"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Comma.html\" title=\"struct syn::token::Comma\">Comma</a>","synthetic":false,"types":["syn::token::Comma"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Div.html\" title=\"struct syn::token::Div\">Div</a>","synthetic":false,"types":["syn::token::Div"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Dollar.html\" title=\"struct syn::token::Dollar\">Dollar</a>","synthetic":false,"types":["syn::token::Dollar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Dot.html\" title=\"struct syn::token::Dot\">Dot</a>","synthetic":false,"types":["syn::token::Dot"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Eq.html\" title=\"struct syn::token::Eq\">Eq</a>","synthetic":false,"types":["syn::token::Eq"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Gt.html\" title=\"struct syn::token::Gt\">Gt</a>","synthetic":false,"types":["syn::token::Gt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Lt.html\" title=\"struct syn::token::Lt\">Lt</a>","synthetic":false,"types":["syn::token::Lt"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Or.html\" title=\"struct syn::token::Or\">Or</a>","synthetic":false,"types":["syn::token::Or"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Pound.html\" title=\"struct syn::token::Pound\">Pound</a>","synthetic":false,"types":["syn::token::Pound"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Question.html\" title=\"struct syn::token::Question\">Question</a>","synthetic":false,"types":["syn::token::Question"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Rem.html\" title=\"struct syn::token::Rem\">Rem</a>","synthetic":false,"types":["syn::token::Rem"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Semi.html\" title=\"struct syn::token::Semi\">Semi</a>","synthetic":false,"types":["syn::token::Semi"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Star.html\" title=\"struct syn::token::Star\">Star</a>","synthetic":false,"types":["syn::token::Star"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Sub.html\" title=\"struct syn::token::Sub\">Sub</a>","synthetic":false,"types":["syn::token::Sub"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/token/struct.Tilde.html\" title=\"struct syn::token::Tilde\">Tilde</a>","synthetic":false,"types":["syn::token::Tilde"]},{"text":"impl&lt;'c, 'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"syn/parse/struct.StepCursor.html\" title=\"struct syn::parse::StepCursor\">StepCursor</a>&lt;'c, 'a&gt;","synthetic":false,"types":["syn::parse::StepCursor"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()